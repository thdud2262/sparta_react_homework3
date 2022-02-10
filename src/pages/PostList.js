import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import styled from 'styled-components';
import Post from '../components/Post';
import {actionCreators as postActions} from '../redux/modules/post';




const PostList = (props) => {

  const dispatch = useDispatch()
  const post_list = useSelector((state)=> state.post.list)
  const user_info = useSelector((state)=> state.user.user)
  // 리듀서- post, user 정보 가져오기  
  // userinfo : 지금 로그인한 유저 정보! 
  // console.log(user_info)

  React.useEffect(()=>{
    //처음 컴포넌트가 생겼을 때 firebase에 한번만 데이터 요청 ! (빈배열)
    // if (post_list.length === 0){
      dispatch(postActions.getPostFB())
      //zzz 이거이상햏ㅎㅎㅎ 무슨말인지../ 글쓰고나서 하나만보여줌ㅋ  
    // }
  }, [])


  return (
    <React.Fragment>
      {post_list.map((p,idx)=>{
          // console.log(p.id)
          // p.user_info => postlist의 userinfo 
          // user_info.uid => 리듀서 user 안에 있는 uid
        if (p.user_info.user_id === user_info?.uid){
          return  <Post key={p.id} {...p} is_me/>
        }else{
          return  <Post key={p.id} {...p}/>
        }
        
      })}

    </React.Fragment>
  )  
}

export default PostList;
