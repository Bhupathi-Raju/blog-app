import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledButton = styled(Button)`
align-contents:center;
color: white;
`;

const StyledLink = styled(Link)`
{
    color: white;
    text-decoration:none;
}
`;

export default function LoginControl({isLoggedIn, loginHandler}){
    console.log("log", isLoggedIn)
    if(isLoggedIn){
        return (
            <StyledLink to="/logout">
                <StyledButton onClick={loginHandler}>Logout</StyledButton>
            </StyledLink>
        )
    }
    else{
        return (<StyledButton onClick={loginHandler}>Login</StyledButton>)
    }
}