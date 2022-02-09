import React from 'react';
import styled from 'styled-components';

import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import { Text, Input, Grid, Button } from "../elements";


const PostDetail = (props) => {

  return (
    <React.Fragment>
      <Post/>
      <CommentList/>
      <CommentWrite/>
    </React.Fragment>
  )  
}


export default PostDetail;
