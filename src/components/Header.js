import React from "react";
import { Text, Grid, Button } from "../elements";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from '../shared/firebase'; 
import { history } from "../redux/configureStore";

import styled from "styled-components";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { FaLaptop } from 'react-icons/fa';



const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state)=> state.user.is_login)
  // 리듀서 스토어에 있는 값 가지고옴! 
  // const user = useSelector((state)=> state.user.user)
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;


  const logout = () => {
    dispatch(userActions.logoutFB({}))
  }


  if (is_login === true && is_session === true){
    return(
      <Grid is_flex flex_between padding='15px 15px 40px'>
        <Grid is_flex>
        <FaLaptop size='35px'color='#087f5b'/>
          <Text 
            _onClick={()=>{
              history.push('/')
            }}
            children= 'React' 
            bold size='35px' 
            color='#087f5b' 
            margin = '0px 0px 0px 7px'> 
          </Text>
        </Grid>
        <Grid is_flex flex_end >
          <Button text='내정보' btn_size='mini' margin='5px'></Button>
          <Button text='알림' btn_size='mini' margin='5px'></Button>
          <Button text='로그아웃' 
            _onClick={()=>{ 
              console.log('로그아웃버튼누르기')
              logout();
            }}
            btn_size='mini'  margin='5px'></Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <React.Fragment>
      
      <Grid 
        is_flex 
        flex_between 
        padding='15px 15px 40px' >
        <Grid is_flex>
          <FaLaptop size='35px'color='#087f5b'/>
          <Text 
            _onClick={()=>{
              history.push('/')
            }}
            cursor= 'pointer'
            children= 'React'
            bold size='35px' 
            color='#087f5b' 
            margin = '0px 0px 0px 7px'
            > 
          </Text>
        </Grid>
        <Grid is_flex flex_end >
          <Button 
            text='회원가입' 
            btn_size='mini' 
            margin='5px'
            _onClick={()=>{
              history.push('/regist')
            }}
            >
          </Button>
          <Button 
            text='로그인' 
            btn_size='mini'
            _onClick={()=>{
              history.push('/login')
            }}
          >
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



export default Header;
