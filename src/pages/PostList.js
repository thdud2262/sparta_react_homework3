import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import Post from '../components/Post';
import {actionCreators as postActions} from '../redux/modules/post';




const PostList = (props) => {

  const dispatch = useDispatch()
  const post_list = useSelector((state)=> state.post.list)
  // 리듀서(post) - 안에 list  
  // console.log(post_list)

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
        return <Post key='id' {...p} />
      })}
      
    </React.Fragment>
  )  
}

export default PostList;
