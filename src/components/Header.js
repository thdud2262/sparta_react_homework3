import React from "react";
import { Text, Grid, Button } from "../elements";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styled from "styled-components";
import { getCookie, deleteCookie } from "../shared/Cookie";


const Header = (props) => {

  const [is_login, setIsLogin] = React.useState(false);
  React.useEffect (()=>{
    let cookie = getCookie('user_id');
    console.log(cookie)
    if (cookie){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    };
  });

  const logout =()=> {
    deleteCookie('user_id')
  }

  if (is_login === true){
    return(
      <Grid is_flex flex_between padding='15px 15px 40px'>
        <Text 
          children= 'React' 
          bold size='35px' 
          color='#087f5b' 
          width='50%' 
          margin = '0px'> 
        </Text>
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
        <Text 
          children= 'React'
          bold size='35px' 
          color='#087f5b' 
          width='50%' 
          margin = '0px'> 
        </Text>
        <Grid width='150px' is_flex flex_end >
          <Button text='회원가입' 
            btn_size='mini' margin='5px'></Button>
          <Button text='로그인' btn_size='mini'></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



export default Header;
