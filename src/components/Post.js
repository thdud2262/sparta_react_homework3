import React from 'react';
import { Grid, Text, Image, Button } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  // console.log(props.id) 
  const dispatch = useDispatch()
  const history = useHistory();

  // console.log(props.is_me)

  const delete_btn = ()=> {
    const imageDel =props
    // props.is_me? dispatch(postActions.delPostFB(imageDel)) : window.alert('내가 작성한 게시물만 삭제 가능합니다')
    // console.log(imageDel)
    dispatch(postActions.delPostFB(imageDel))
  }
  const update_btn= ()=> {
    history.push("/write/" + props.id) //id와 함께 페이지이동
    console.log('업데이트클릭', props)
  }

  return (
    <Grid  border= '1px solid black' padding = '15px 0' margin = '0 0 10px 0 '>
      <Grid is_flex padding = '5px 15px' >   
        <Grid is_flex>
          <Image shape = 'circle'></Image>
          <Text bold> {props.user_info.user_name}</Text>
        </Grid>
        <Grid is_flex flex_end >
          <Text margin='0 5px 0 0'> {props.insert_dt} </Text>
          <Button margin='0 5px 0 0'
            text='삭제' 
            _onClick={()=> {
              delete_btn()
            }}
          ></Button>
          { props.is_me && 
          <Button text='수정' 
            _onClick={()=> { 
              update_btn(
              //props에 is_me가 있는 경우에 버튼 보여줘
            ) }}
          ></Button> }
        </Grid>
      </Grid>

      <Grid padding = '5px 15px' >
        <Text > {props.contents}</Text>
      </Grid>

      <Grid>
        <Image 
          shape ='rectangle' 
          src = {props.image_url} 
        ></Image>
      </Grid>

      <Grid padding = '5px 15px' margin='0 0 20px 0'>
        <Text bold> {props.comment_cnt}개 </Text>
      </Grid>
      
    </Grid>
  )  
}


Post.defaultProps = {
  user_info : { 
    user_name : "소영",
    user_profile : "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg"
  },
  image_url : "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg",
  contents : "안녕하세요! 리액트를 잘하고싶은 정소영입니다 으하하하핳ㅎ  ",
  comment_cnt: '좋아요 10',
  insert_dt : "2022.02.04",
  is_me: false,

}


export default Post;