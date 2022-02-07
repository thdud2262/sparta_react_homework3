import React from "react";
import styled from "styled-components";
import { Text } from "./index";

const Input = (props) => {
  const { label, placeholder, _onChange, type } = props
    
  return (
    <React.Fragment>
      <Text margin='2px'>{label}</Text>
      <InputText 
        placeholder={placeholder} 
        onChange={_onChange}
        type={type}
        />
    </React.Fragment>
  );
}

Input.defaultProps = {
  label : '텍스트',
  placeholder : '텍스트를 입력하세요',
  _onChange : ()=>{},
  type : 'text',
};
const InputText = styled.input`
  border: 1px solid #212121;
  width : 100%;
  padding : 12px;
  box-sizing : border-box;
  border-radius : 5px;
  margin-bottom : 30px;
  type : ${(props)=> props.type};
`;

export default Input;
