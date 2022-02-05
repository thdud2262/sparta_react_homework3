import React from "react";
import styled from "styled-components";



const Button = (props) => {
  const { text, _onClick , btn_size} = props;
  const styles = {btn_size : btn_size }

  if ( btn_size === 'mini'){
    return (
    <BtnMini  {...styles}> {text} </BtnMini>
    )
  }
  if ( btn_size === 'big'){
    return (
    <BtnBig {...styles}> {text} </BtnBig>
    )
  }

  return(
    <React.Fragment>
    </React.Fragment>
  )
}


Button.defaultProps = {
  text : '텍스트',
  btn_size : 'mini',  
  _onClick : ()=>{},
};

const BtnMini = styled.button`
  border-radius : 5px;
  padding : 3px 10px;
  box-sizing : border-box;
  background-color : #adb5bd;
  border: none;
  color : white;
`;
const BtnBig = styled.button`
  width : 100%;
  padding : 12px;
  box-sizing : border-box;
  margin-top: 20px;
  border: none;
  border-radius : 5px;
  background-color : #adb5bd;
  color : white;
`;
export default Button;