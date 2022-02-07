import React from 'react';
import { Grid, Text, Image, Button } from '../elements';



const Post = (props) => {
  // console.log(props)
  return (
    <Grid  border= '1px solid black' padding = '15px 0' margin = '0 0 10px 0 '>
      <Grid is_flex padding = '5px 15px' >   
        <Grid is_flex>
          <Image shape = 'circle'></Image>
          <Text bold> {props.userinfo.user_name}</Text>
        </Grid>
        <Grid is_flex flex_end >
          <Text margin='0 5px 0 0'> {props.insert_dt} </Text>
          <Button text='수정'></Button>
        </Grid>
      </Grid>

      <Grid padding = '5px 15px' >
        <Text > {props.comment}</Text>
      </Grid>

      <Grid>
        <Image shape ='rectangle'></Image>
      </Grid>

      <Grid padding = '5px 15px' margin='0 0 20px 0'>
        <Text bold> {props.comment_cnt} </Text>
      </Grid>
      
    </Grid>
  )  
}


Post.defaultProps = {
  userinfo : { 
    user_name : "소영",
    user_profile : "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg"
  },
  image_url : "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg",
  comment : "안녕하세요! 리액트를 잘하고싶은 정소영입니다 으하하하핳ㅎ  ",
  comment_cnt: '좋아요 10',
  insert_dt : "2022.02.04"

}


export default Post;