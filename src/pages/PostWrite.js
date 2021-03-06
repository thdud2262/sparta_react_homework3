// postWrite 페이지는 로그인 한 사람만 들어오게! 
import React from 'react';

//is_login유무, 리덕스 data사용
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from "../redux/modules/post"; 

// 컴포넌트, 스타일 import
import {Grid, Text, Button, Image, Input} from '../elements'
import styled from 'styled-components';
import Upload from '../shared/Upload';





const PostWrite = (props) => {
  // console.log(props)

  const dispatch = useDispatch()
  // store-user에 있는 data중에서 login찾압
  const is_login = useSelector((state)=> state.user.is_login)
  const preview = useSelector((state)=> state.image.preview)
  // console.log(preview)

  //왜 변수로 받지 props의 하나로 가져와! ..음 왜 어케..
  const { history }= props; 
  
  //input-textarear 가져오기
  const [contents, setContents] = React.useState('') 
  const write = ()=>{
    console.log(contents)
    dispatch(postActions.addPostFB(contents))
  }
  console.log(props.match.params.id)


  if (!is_login){
    return (  
      <Grid padding='60px 20px'>
        <Text size='25px' bold align='center'>앗! 로그인을 하셔야 해요 </Text>
        <Button btn_size='big' text = '로그인 하러 가기' _onClick={()=> {
          window.alert('로그인 페이지로 이동')
          history.replace('/login')
        }}></Button>
      </Grid>
    )
  }
  return(
    <Grid border='1px solid black'>
      <Grid padding ='15px'>
        <Text size='30px' bold margin='20px 0' align='center'>게시글작성</Text>
        <Upload></Upload>
      </Grid>

      <Grid>
        <Image 
          shape='rectangle' 
          src={preview? preview : "http://via.placeholder.com/400x300"} 
        ></Image>
      </Grid>

      <Grid padding='15px'>
        <Input 
          label='게시글내용' placeholder='게시글작성' multiLine 
          _onChange={(e)=>{setContents(e.target.value)}}
          //값이 바뀌면 setContents의 관리로ㅋㅋ contents로 들어감
          > 
        </Input>
      </Grid>
      <Grid padding='15px'>
        <Button 
          text='게시글 작성' 
          btn_size='big' margin='30px 0'
          _onClick={write}>  
        </Button>
      </Grid>
    </Grid>
  )
}

export default PostWrite;


