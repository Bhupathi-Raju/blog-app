import React from 'react'
import TextField from '../atoms/Textfield'
import LoginButton from '../atoms/LoginButton'
import {makeStyles} from '@material-ui/core/styles'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import LoginControl from '../atoms/LoginControl'

  const StyledHeader = styled.div`
  position: sticky;
  top:0;
  z-index: 100;
  padding: 10px;
  background:black;
  button {
    position:absolute;
    right: 20px;
    align-contents:center;
    color: red;
  }
  h2 {
    width: 500px;
    text-align: center;
    color: red;
  } `;



export default function Header({isLoggedIn}){
    return(
        <StyledHeader>
            <h2>The Articles</h2>
            <LoginControl id="login" isLoggedIn = {true}/>
        </StyledHeader>
    );
}