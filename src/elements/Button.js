import React from "react";
import styled from "styled-components";



const Button = (props) => {
  const { 
    text, 
    _onClick, 
    btn_size, 
    margin, 
    width,
    height,
    bg,
  } = props;

  const styles = {
    btn_size : btn_size, 
    margin: margin,
    width: width,
    heigh: height, 
    bg: bg,
  }

  if ( btn_size === 'mini'){
    return (
    <BtnMini {...styles} onClick={_onClick}> {text} </BtnMini>
    )
  }
  if ( btn_size === 'big'){
    return (
    <BtnBig {...styles} onClick={_onClick}> {text} </BtnBig>
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
  margin : false,
  width : '100%',
  height : '100%',
  bg : '#adb5bd',
};

const BtnMini = styled.button`
  border-radius : 5px;
  padding : 7px 10px;
  font-weight: 600;
  text-shadow: 1px 1px 2px gray;  
  box-sizing : border-box;
  background-color : #adb5bd;
  border: none;
  color : white;
  margin : ${(props)=> props.margin};
  cursor : pointer;
`;
const BtnBig = styled.button`
  width : 100%;
  padding : 12px;
  box-sizing : border-box;
  margin-top: 20px;
  border: none;
  border-radius : 5px;
  background-color : ${(props)=> props.bg};
  color : white;
  font-weight : 600;
  font-size: 16px;
  margin : ${(props)=> props.margin};
  cursor : pointer;
`;
export default Button;