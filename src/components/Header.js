import React from "react";
import { Text, Grid, Button } from "../elements";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styled from "styled-components";


const Header = (props) => {
  return (
      
    <React.Fragment>
      <Grid is_flex padding='0 15px 30px' >
        <Text bold size='35px' color='#087f5b' width='50%' margin = '0px' 
        >React</Text>
        <Grid is_flex width='150px' >
          <Button text='회원가입' btn_size='mini'></Button>
          <Button text='로그인' btn_size='mini'></Button>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}



export default Header;
