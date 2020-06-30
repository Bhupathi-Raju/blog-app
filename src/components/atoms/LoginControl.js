import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const styledButton = styled(Button)`
align-contents:center;
color: white;
`;

export default function LoginControl({isLoggedIn, loginHandler}){
    if(isLoggedIn){
        return (<Button onClick={loginHandler}>Login</Button>)
    }
    else{
        return (<Button onClick={loginHandler}>Logout</Button>)
    }
}