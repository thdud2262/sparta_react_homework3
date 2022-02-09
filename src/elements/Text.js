import React from "react";
import styled from "styled-components";



const Text = (props) => {
  // console.log(props)
  const { 
    children, 
    bold, 
    color, 
    size, 
    margin, 
    padding,
    align,
    _onClick,
    cursor,     
  } = props;
  // console.log(props)//어떤 값이 넘어왔는지 확인함

  const styles = { 
    bold: bold, 
    color: color, 
    size: size, 
    margin: margin, 
    padding: padding, 
    align: align,
    cursor: cursor
  };

  return(
    <React.Fragment>
      <T {...styles} onClick={_onClick}>{children}</T>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children : null,
  bold : false,
  color : '#222831',
  size : '14px', 
  margin : false,
  padding : false,
  align: false,
  _onClick : ()=>{},
  cursor: 'default',
}

const T = styled.p`
  font-weight : ${(props)=> props.bold? "600" : "400"};
  font-size :  ${(props)=> props.size};
  color : ${(props)=> props.color};
  cursor : ${(props)=> props.cursor};
  ${(props)=> (props.margin? `margin : ${props.margin};` : "")};
  ${(props)=> (props.padding? `padding : ${props.padding};` : "")};
  ${(props)=> (props.align? `text-align : ${props.align};` : "")};
  box-sizing : border-box;
`;



export default Text;