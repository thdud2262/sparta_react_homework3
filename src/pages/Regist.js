import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";



const Regist = (props) => {

  return (
      <React.Fragment>
        <Text bold size='30px' align='center' children='회원가입하기'></Text>
        <Grid padding = '15px'>
          <Input 
            label='아이디' 
            placeholder='아이디를 입력하세요' 
            _onChange={()=>{ console.log('아이디입력')}}>
          </Input>
          <Input 
            label='이메일' 
            placeholder='이메일을 입력하세요' 
            _onChange={()=>{ console.log('이메일입력')}}>
          </Input>
          <Input 
            label='비밀번호' 
            placeholder='비밀번호를 입력하세요' 
            _onChange={()=>{ console.log('비밀번호입력')}}>
          </Input>
          <Input 
            label='비밀번호확인' 
            placeholder='비밀번호를 한번 더 입력하세요' 
            _onChange={()=>{ console.log('비밀번호확인입력')}}>
          </Input>
          <Button 
            btn_size = 'big'
            text = '로그인'>
  
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
  

export default Regist;