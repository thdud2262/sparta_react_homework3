import React from "react";
import styled from "styled-components";



const Grid = (props) => {
  const { 
    children, 
    is_flex, 
    width, 
    height,
    padding, 
    margin, 
    bg,
    flex_center,
    flex_between,
    flex_end,
    border,
    _onClick,
  } = props;
  // console.log(props)//어떤 값이 넘어왔는지 확인함

  const styles = { 
    is_flex: is_flex, 
    width: width, 
    height: height,
    padding: padding, 
    margin: margin, 
    bg: bg, 
    flex_center: flex_center, 
    flex_between: flex_between,
    flex_end: flex_end,
    border: border,
    _onClick: _onClick,

  };


  return(
    <React.Fragment>
      <GridBox {...styles} onClick = {_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  flex_center: false,
  flex_between: false,
  flex_end: false,
  width: '100%',
  height : '100%',
  padding: false,
  margin: false,
  bg: false,
  border: false,
  _onClick: ()=> {},

};

const GridBox = styled.div`
  width : ${(props)=> props.width};
  height : ${(props)=> props.height};
  box-sizing : border-box;
  border: ${(props)=> props.border};
  ${(props)=> (props.padding ? `padding:${props.padding};` : "") };
  ${(props)=> (props.margin ? `margin:${props.margin};` : "") };
  ${(props)=> (props.bg ? `background-color:${props.bg};` : "") };
  ${(props)=> 
    (props.is_flex ? `display:flex; align-items:center;  ` : "" )}
  ${(props)=> 
    (props.flex_center ? `justify-content: center;` : "" )}
  ${(props)=> 
    (props.flex_between ? `justify-content: space-between; ` : "" )}
  ${(props)=> 
    (props.flex_end ? `justify-content: flex-end;` : "" )}
`;

export default Grid;
