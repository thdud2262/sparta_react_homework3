// 리덕스에 넣어야 할 데이터 
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import { storage } from '../../shared/firebase';



// 액션타임
const UPLOADING  = "UPLOADING";
const UPLOAD_IMAGE  = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";


// 액션생성함수
const uploading = createAction(UPLOADING, (uploading) => ({uploading}))
const uploadImage = createAction(UPLOAD_IMAGE, (image_url)=> ({image_url}))
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}))


// initialState
const initialState = {
  image_url : '',
  uploading : false,
  preview : null,
}

// 미들웨어
const uploadImageFB = (image) => {
  return function (dispatch, getState, {history}){
    // 사진 업로드 하기
    dispatch(uploading(true))
    const _upload = storage.ref(`images/${image.name}`).put(image);
    
    // 사진 업로드가 성공적으로 끝나면 upload false
    // firebase파일업로드 snapshot
    _upload.then((snapshot) => {
      console.log(snapshot);
        dispatch(uploading(false));

      // 업로드한 사진 url 가져오기
        snapshot.ref.getDownloadURL().then((url)=> {
          dispatch(uploadImage(url))
          console.log(url)
          // 업로드 url을 가지고 있는 시점에서는 upload(false)가 이미 끝났음 
          // dispatch를 두번 할 필요없다! 
        })      
    });
  }
}

// 리듀서
export default handleActions(
{
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    },
    initialState
  );

const actionCreators = {
    uploadImage,
    uploadImageFB,
    setPreview, 
  };

  export { actionCreators };
