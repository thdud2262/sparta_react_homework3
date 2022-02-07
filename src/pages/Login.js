import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user"; 
import { Dispatch } from "react";

import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie'


const Login = (props) => {

  const dispatch = useDispatch()
  const [ id, setId ] = React.useState('')
  const [ pw, setPw ] = React.useState('')
  
  const login = () => {
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;
    
    if ( id === '' || pw === ''){
      window.alert('아이디 또는 비밀번호 빈칸을 채워주세요');
      return;
    }
    if (!expEmailText.test(id)){
      window.alert('아이디는 이메일 형식입니다. 확인해 주세요')
    }
    dispatch(userActions.loginFB(id, pw));
  }

  return (
    <React.Fragment>
      <Text bold size='30px' align='center'> 로그인하기 </Text>
      <Grid padding = '15px'>
        <Input 
          label='아이디' 
          placeholder='아이디를 입력하세요' 
          _onChange={(e)=>{ 
            setId(e.target.value) 
            }}>
        </Input>
        <Input 
          label='비밀번호' 
          placeholder='비밀번호를 입력하세요' 
          type= 'password'
          _onChange= {(e)=>{ 
            setPw(e.target.value)
          }}>
        </Input>
        <Button 
          btn_size= 'big' bg="#087f5b"
          text= '로그인하기'
          _onClick= {()=> {
            console.log('로그인 버튼 클릭');
            login();
          }}
        >
        </Button>
      </Grid>
    </React.Fragment>
  );
}



export default Login;
