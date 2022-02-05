import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css"
import styled from "styled-components";
import PostList from "../pages/PostList";
import Regist from "../pages/Regist";
import Login from "../pages/Login";
import Header from "../components/Header";

function App() {
  return (
    <div className="App">
    <React.Fragment>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact component={ PostList }/>
        <Route path="/login" exact component={ Login }/>
        <Route path="/regist" exact component={ Regist }/>
      </BrowserRouter>
    </React.Fragment>
    </div>
  )
}

export default App;
