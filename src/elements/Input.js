import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine  } = props
  
  if(multiLine){
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10} 
          placeholder={placeholder}
          onChange={_onChange}>
        </ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Text margin='2px'>{label}</Text>
      <ElInput 
        placeholder={placeholder} 
        onChange={_onChange}
        type={type}
        />
    </React.Fragment>
  );
}

Input.defaultProps = {
  multiLine: false,
  label : '텍스트',
  placeholder : '텍스트를 입력하세요',
  type : 'text',
  _onChange : ()=>{},

};
const ElInput = styled.input`
  border: 1px solid #212121;
  width : 100%;
  padding : 12px;
  box-sizing : border-box;
  border-radius : 5px;
  margin-bottom : 30px;
  type : ${(props)=> props.type};
`;

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;

`;




export default Input;
