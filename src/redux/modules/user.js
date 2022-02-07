import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import firebase from "firebase";
import { auth, apiKey } from "../../shared/firebase";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";


//액션 타입
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";
const SET_USER = "SET_USER";



//액션생성함수
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));



//초기화 initialState
const initialState = {
  user: null,
  is_login: false,
};


//미들웨어
const loginFB= (id, pw) => {
  return function (dispatch, getState, {history}){
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(()=>{
      auth
      .signInWithEmailAndPassword(id, pw)
      .then((user) => {
        console.log(user, '로그인성공-스토어로감')
      // 로그인 후에 할 일들 : 스토어에 유저정보 저장   
        dispatch( 
          setUser({ 
            user_name : user.user.displayName, 
            id : id, 
            user_profile : '',
            uid : user.user.uid,
          })
        );
        window.alert(`즐거운 시간 보내세요! ${user.user.displayName}님!`);
        history.push('/');
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage)
        window.alert(errorCode, errorMessage)
      });
    });
  };
};  


const signupFB= (id, pw, user_name)=> {
  return function ( dispatch, getState, {history}){
    auth
    .createUserWithEmailAndPassword(id, pw)
    .then((user) => {
      console.log(user,'회원가입성공-스토어')
      //user이름의 객체형태로 유저정보 저장됨.
      auth.currentUser.updateProfile({
        displayName: user_name,
        // updateProfile에 업데이트 하기 위한 객체 넣기(제공) displayName(객체안 정보중 하나)
      }).then(()=>{
        console.log(user)
        dispatch(
          setUser({
            user_name : user_name, 
            id : id, 
            user_profile : '',
            uid : user.user.uid,
          })
        )
        window.alert(`환영합니다. ${user_name}님!`)      
        history.push('/'); 
      }).catch((error)=>{
        console.log(error)
      })
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert(errorCode, errorMessage)
      console.log(errorCode, errorMessage)
    });
  }
}

const loginCheckFB = () =>{
  return function ( dispatch, getState, {history}){
    auth.onAuthStateChanged((user)=>{
      //유저 있는지 없는지 확인
      if(user){
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile:'',
            id: user.email,
            uid: user.uid,
          })
        )
      }else{
        dispatch(logOut())
        //logout -> app.js
      }
    })
  }
}

const logoutFB= ()=> {
  return function ( dispatch, getState, {history}){
    auth.signOut().then(() => {
      dispatch(logOut())
      window.alert('로그아웃 되셨습니다. 다음에 또 놀러오세요!')
      history.replace('/')
    })
  }}





//리듀서
export default handleActions(
  {
  // 로그인 했을 때 => initialState 값 변경 => (1)cookie-is_login생성 (2) user: 정보 (3) is_login: true 
  // immer(불변성) => 원본 복사(draft)/유저정보 payload에 담김
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
				draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    // [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);



// aciotnCreator export

const actionCreators = {
  logOut,
  // getUser,
  loginFB,
  signupFB,
  logoutFB,
  loginCheckFB,
};

export { actionCreators };