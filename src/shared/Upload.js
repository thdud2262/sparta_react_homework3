import React from "react";
import styled from "styled-components";
import { Button } from '../elements'
import { Dispatch } from "react";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch } from "react-redux";

const Upload = (props) => {
    const { margin } =props;
    const { styles } = { margin : margin }
    const fileInput = React.useRef();
    const dispatch = useDispatch();

    const selectFile = (e) =>{
        // console.log(e)
        // console.log(e.target.value)
        // 셀렉트 했을 때 인풋에 파일객체 들어감-> js 파일리더로 읽어들일것
        // js객체 만듦 (v파일객체 읽으려고) => readAsDataURL메소드 사용
        // read가 끝나면 불러올 이벤트 onloadend// reader.result -결과물
        // 미리보기가 있는 곳으로 간다 => pagewrite에서 img 사용하려면 // 리덕스에 저장 후
        const reader = new FileReader(); 
        const file = fileInput.current.files[0]
        reader.readAsDataURL(file);
        reader.onloadend =()=> {
        // console.log(reader.result)
        dispatch (imageActions.setPreview(reader.result))
        } 
    }
    
    return (
        <React.Fragment>
            <I {...styles} 
                type="file" 
                margin='10px 0'
                ref={ fileInput }
                onChange={selectFile}             
            ></I>
            <Button 
                text='업로드하기' 
                btn_size = 'big'
            ></Button>
        </React.Fragment>
    )
}



Upload.defaultProps = {
    margin: false,
    cursor : 'default',
};

const I = styled.input`
    ${(props)=> (props.margin? `margin : ${props.margin};` : "")};
`;

export default Upload;