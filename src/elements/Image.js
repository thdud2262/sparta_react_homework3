import React from "react";
import styled from "styled-components";



const Image = (props) => {
  // console.log(props)
  const { shape, src, size} = props;
  const styles = { src : src, size : size }

  if (shape === "circle"){
    return (
      <ImgCircle {...styles}></ImgCircle>
      )
  }
  if (shape === "rectangle"){
    return (
      <OutRectangle>
        <ImgRectangle {...styles}/>
      </OutRectangle>
      )
  }

  return(
    <React.Fragment>
    </React.Fragment>
  )
}






Image.defaultProps = {
  shape : "circle",
  src: "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2021/09/27/109431207.2.jpg",
  size : '40px',
  };
  

const ImgCircle = styled.div`
  --size : ${(props)=> props.size };
  width : var(--size);
  height: var(--size);
  border-radius: var(--size);
  background : url("${(props)=> props.src }");
  background-size : cover;
  margin: 4px
`;
const OutRectangle = styled.div`
  width:100% ;
  min-width:250px  
`;
const ImgRectangle = styled.div`
  position : relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;