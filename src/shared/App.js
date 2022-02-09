import React from "react";
import "./App.css"

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "./firebase";
import { useDispatch } from 'react-redux';

import PostList from "../pages/PostList";
import Regist from "../pages/Regist";
import Login from "../pages/Login";

import Header from "../components/Header";
import { Text } from '../elements';
import styled from "styled-components";
import { FaCameraRetro } from 'react-icons/fa';
import Permit from './Permit';
import PostWrite from '../pages/PostWrite'
import PostDetail from '../pages/PostDetail'



function App() {

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() => {
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  })

  const dispatch = useDispatch()

  
  return (
    <div className="App">
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={ PostList }/>
        <Route path="/login" exact component={ Login }/>
        <Route path="/regist" exact component={ Regist }/>
        <Route path="/write" exact component={ PostWrite }/>
        <Route path="/post/:id" exact component={ PostDetail }/>

      </ConnectedRouter>
      <Permit>
        <Icon onClick={()=>{
          history.replace('/write')
        }}>
          <FaCameraRetro/>
        </Icon>
      </Permit>
      
    </React.Fragment>

    </div>
  )
}

const Icon = styled.span`
  background-color: #087f5b;
  color : white;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
`;


export default App;
