import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie'




const Login = (props) => {

  const login = () => {

    setCookie('user_id', '소영-id',3)
    setCookie('user_pwd', 'thdud-pw',3)  
  }

  return (
    <React.Fragment>
      <Text bold size='30px' align='center'> 로그인하기 </Text>
      <Grid padding = '15px'>
        <Input 
          label='아이디' 
          placeholder='아이디를 입력하세요' 
          _onChange={()=>{ console.log('아이디입력')}}>
        </Input>
        <Input 
          label='비밀번호' 
          placeholder='비밀번호를 입력하세요' 
          _onChange= {()=>{ console.log('비밀번호입력')}}>
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
