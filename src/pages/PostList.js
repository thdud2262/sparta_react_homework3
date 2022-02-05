import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Post from '../components/Post';


const PostList = (props) => {

  return (
    <React.Fragment>
      <Post></Post>
    </React.Fragment>
  )  
}


export default PostList;



