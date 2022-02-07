import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";



const Regist = (props) => {

  const dispatch = useDispatch()
  
  const [id, setId] = React.useState('')
  const [pw, setPw] = React.useState('')
  const [pw_check, setPwdCheck] = React.useState('')
  const [user_name, setUserName] = React.useState('')

  const regist = ()=> {
    const ExpUserpw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;
    
    if ( id === '' || pw === '' || pw_check==='' ){
      window.alert('아이디 또는 비밀번호 빈칸을 채워주세요');
      return;
    }
    if (!expEmailText.test(id)){
      window.alert('아이디는 이메일 형식입니다. 확인해 주세요')
    }
    if (pw !== pw_check){
      window.alert('비밀번호가 맞지 않습니다. 확인해주세요');
    }
    if (!ExpUserpw.test(pw)){
      window.alert('비밀번호 형식을 맞춰주세요 (영문, 숫자조합의 8~20 글자 이내)')
    }
    dispatch(userActions.signupFB(id, pw, user_name))
  }

  return (
      <React.Fragment>
        <Text 
          bold size='30px' 
          align='center' 
          children='회원가입하기'>
        </Text>
        <Grid padding = '15px'>
          <Input 
            label='아이디' 
            placeholder='이메일 형식의 아이디를 입력하세요' 
            _onChange={(e)=>{
              setId(e.target.value)  
              }}>
          </Input>
          <Input 
            label='닉네임' 
            placeholder='닉네임을 입력하세요' 
            _onChange={(e)=>{  
              setUserName(e.target.value)  
              }}>
          </Input>
          <Input 
            label='비밀번호' 
            placeholder='비밀번호를 입력하세요' 
            type='password'
            _onChange={(e)=>{ 
              setPw(e.target.value)  
              }}>
          </Input>
          <Input 
            label='비밀번호확인' 
            placeholder='비밀번호를 한번 더 입력하세요'
            type='password' 
            _onChange={(e)=>{ 
              setPwdCheck(e.target.value)
              }}>
          </Input>
          <Button 
            btn_size = 'big'
            bg="#087f5b"
            text = '회원가입하기'
            _onClick= {()=> {
              regist()
            }}>
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
  

export default Regist;