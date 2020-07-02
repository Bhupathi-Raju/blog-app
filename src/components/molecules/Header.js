import React from 'react'
import TextField from '../atoms/Textfield'
import LoginButton from '../atoms/LoginButton'
import {makeStyles} from '@material-ui/core/styles'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import LoginControl from '../atoms/LoginControl'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors'
import {Link} from 'react-router-dom'


  const StyledHeader = styled.div`
  position: sticky;
  top:0;
  z-index: 100;
  padding: 10px;
  background:black;
  flex-direction: row
  button {
    position:absolute;
    right: 20px;
    color: white;
  }
  h2 {
    text-align: center;
    color: red;
  } 
  
  #login{
      color: white;
  }
  `;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:"red"
    },
    appBar:{
        backgroundColor:"black"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign:"center",
      flexGrow:1,
      color:"red",
      textDecoration:"inherit"
    },
    link:{
        color: "inherit",
        textDecoration: "inherit"
    }
  }));



export default function Header(){
    // return(
    //     <StyledHeader>
    //         <h2>The Articles</h2>
    //         <LoginControl id="login" isLoggedIn = {true}/>
    //     </StyledHeader>
    // );
    const token = localStorage.getItem("token")
    let loginText = ""
    if(token == null){
        loginText = "Login"
    }
    else{
        loginText = "Logout"
    }

    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static" className = {classes.appBar}>
          <Toolbar>
            <Link to="/" className = {classes.title}>
            <Typography variant="h6" >
              The Articles
            </Typography>
            </Link>
            <LoginControl isLoggedIn = {token !== null}/>
            {/* <Link to="/login" className = {classes.link}>
                <Button color="inherit">{loginText}</Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </div>
    );
}