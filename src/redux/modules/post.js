// 리덕스에 넣어야 할 데이터 
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore} from "../../shared/firebase";
import moment from "moment"  //날짜, 시간 다루는 js라이브러리
import { firebase, storage, database } from '../../shared/firebase';
import { actionCreators as imageActions } from "./image";


//액션 타입 : post에서 필요한거 보여주기, 올리기
const SET_POST= "SET_POST"; // 포스트 보여주기
const ADD_POST = "ADD_POST";// 포스트 업데이트
const DELETE_POST = "DELETE_POST"; 
const UPDATE_POST = "UPDATE_POST";


//액션생성함수
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const delPost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const updatePost = createAction(UPDATE_POST, (post) => ({ post }));


// 리듀서가 사용할 초기화 initialState
const initialState = {
  list: [],
}


// 게시글 하나에 있어야하는 기본정보
const initialPost = {
  // user_info: {
	// 	id: 0,
  //   user_name: "thdud11",
  //   user_profile: "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg",
  // },
  image_url: "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg",
  contents: "겁먹지마아아ㅏㅏㅏㅏㅏㅏㅏㅏ",
  comment_cnt: 10,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  // insert_dt: "2022-01-10 10:00:00",
};


// 미들웨어
const addPostFB = (contents ='') =>{
  return function (dispatch, getState, {history}){
    // 데이터를 추가할 때 필요한 것 ! user정보, contents
    // firestore에 저장된 형식대로 저장
    const postDB = firestore.collection('post');
    // firstStore에 있는데이터 가져옴 (collection선택 /) 
    const _user = getState().user.user;
    // console.log(_user)
    const _image = getState().image.preview
    // getState: store(리덕스)에 있는 정보를 가지고 온다 (user/imagef)
    // 각 모듈 안에 저장된 키값
    // console.log(_image) //string type의 url -> 업로드하는 방법 따로있음

    const user_info = {
      user_name : _user.user_name,
      user_profile : _user.user_profile,
      user_id: _user.uid
    };
    // console.log(user_info)
  
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt : moment().format("YYYY-MM-DD hh:mm:ss"),
    }
    const _upload = storage
    // storage에 있는 파일 참조 ref,데이터를 가져와 사용가능
    // 이미지 이름 = 유저이름 + 시간 (중복x)/ firebasedoc
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");
      _upload.then(snapshot=> {
        // 파일가져오기코드인데...firebase doc참고
        snapshot.ref.getDownloadURL().then(url => {
          console.log(url)
          return url
          //결과를 이어서 다음으로 넘긴다 js문법..ㅠㅡㅠ
        }).then((url)=>{
          postDB.add({user_info, ..._post, image_url : url})
          .then((doc)=>{
        
            //성공하면 실행
            let post = {user_info, ..._post, image_url: url, id: doc.id }
            //포스트 더해주고, 이미지 미리보기 null로 해주기
            dispatch(addPost(post))
            dispatch(imageActions.setPreview(null))
            console.log(post)
            window.alert('포스트가 작성되었습니다')
            history.replace('/')
          })
          .catch((err)=>{ //실패하면 실행
            console.log('포스트 저장 실패',err)
            window.alert('포스트 작성에 실패했습니다')
          })
        })
        .catch((err)=>{ //실패하면 실행
          console.log('이미지 불러오기 실패', err)
          window.alert('이미지를 불러오지 못했습니다')
        })
      })
    }
  }

// firebase에서 데이터 가져올 때 doc참고
const getPostFB = () => {
  // 포스트 firebase에서 가져옴
  return function (dispatch, getState, { history }) {
    //firebase에서 가져올 collection
    const postDB = firestore.collection("post");
    postDB.get().then((docs)=>{
      let post_list = [];
      docs.forEach((doc,idx)=> {
        // console.log(doc.id, doc.data())
        let _post = {
          id: doc.id, ...doc.data() 
        }
        // console.log(_post)
        let post = {
          id : doc.id,
          user_info: {
            user_name: _post.user_info.user_name,
            user_profile: _post.user_info.user_profile,
            user_id : _post.user_info.user_id
          },
          image_url: _post.image_url,
          contents: _post.contents,
          comment_cnt: _post.comment_cnt,
          insert_dt: _post.insert_dt,
        }
        // console.log(post)//여기다 여기서안들어옴ㅋ
        post_list.push(post);
      })
      // forEach를 해서 만든 데이터를 SET_POST로 넘김 => post_list ( initialState 데이터에 넣어줌 )
      // 리듀서로 전달
      // console.log(post_list);
      dispatch(setPost(post_list));
    })
  }
}

const delPostFB= (postDel)=>{
  return function (dispatch, getState, {history}){
    console.log(postDel)
    console.log('삭제 됐었는데' )
    dispatch(delPost(postDel)); 
  // firebase갑자기 안됌! ㅇㅅㅇ
    const postDB = firestore.collection('post');
    postDB.doc(postDel).delete()
    .then(() => {
      console.log("Document successfully deleted!");
      dispatch(delPost(postDel));
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }
}

// 리듀서 ( immer사용(원본유지가능) => 배열array 사용가능)
// produce (state, draft) 
// state:업데이트하고자 하는 현재상태, draft:현재값 복사
export default handleActions(
  {
      [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
        // console.log(action.payload.post_list)
        //firestore에 있는 data가 보임
      }),
      [ADD_POST]: (state, action) => produce(state, (draft) => {
        // console.log(state, 'ADD리듀서')
        draft.list=[];
        draft.list.unshift(action.payload.post);
      }),
      [DELETE_POST]: (state, action) => produce(state, (draft) => {
        // console.log(action.payload.post_id); 
        // 삭제할 게시글의 index를 찾아서 splice로 지운다. 
        let idx = 
        draft.list.findIndex((p) => p.id === action.payload.post_id); 
        console.log(idx); 
        draft.list.splice(idx, 1); 
        //f리듀서 지워야 화면에 바로 새로고침 
        //state수정함. 
      })
  },
  initialState
);



// action creator export
const actionCreators = {
  setPost,
  addPost,
  delPost,
  getPostFB,
  addPostFB,
  delPostFB,
};

export { actionCreators };
