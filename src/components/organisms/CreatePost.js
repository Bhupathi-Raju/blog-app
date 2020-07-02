import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
width:80%;
margin: auto;
height: 70vh;
display:flex;
margin-top: 10px;
`;

const ExpandTextArea = styled.textarea`
flex:1;
`;

const OuterDiv = styled.div`
display:flex;
flex-direction:column;
width:100%;
`

const StyledButton = styled(Button)`
display:flex;
margin:auto;
background:black;
color:red;

&:hover{
    background:blue;
}
`


export default function CreatePost(){
    const [textAreaValue, setTextArea] = useState("")

    function handleOnChange(event){
        setTextArea(event.target.value);
    }

    function handleOnSubmit(event){
        event.preventDefault();
        setTextArea(textAreaValue);
    }

    useEffect(()=>{

    });

    return(
        <OuterDiv>
        <form onSubmit={(event) => handleOnSubmit(event)}>
            <StyledTextArea value={textAreaValue} 
                onChange={(event) => handleOnChange(event)}/>
          <br/>
          <StyledButton type="submit">Submit Post</StyledButton>
        </form>
      </OuterDiv>
    );
}