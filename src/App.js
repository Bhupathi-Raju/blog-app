import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import CardView from './components/molecules/cardView'
import GridView from './components/organisms/GridView'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import LoginControl from './components/atoms/LoginControl'
import Header from './components/molecules/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginForm from './components/organisms/LoginForm'
import CreatePostButton from './components/atoms/CreatePostButton'
// import styled from 'styled-components'

const bodyStyle = makeStyles({
    body: {
        margin:"0",
        background: "black"
    },
    header:{
        display:"inline",
        background:"black",
        alignContent:"center",
        color: "red"
    }
    }
  );

//   const StyledHeader = styled(Header)`
//   position: sticky;
//   top:0;
//   z-index: 100;
//   padding: 10px;
//   text-align: center;
//   color: white;
//   fontSize: 22px;
//   background:black;
//   margin:0;
//   `;

  const LoginButton = styled(Button)`
  position:absolute;
  right: 20px;
  align-contents:center;
  color: white;
  `;

  const StyledLogin = styled(LoginControl)`
  position:absolute;
  left: 20px;
  align-contents:center;
  color: white;
  text-color: white;
  `;

  const StyledFab = styled.div`
    position: sticky;
    top:1;
    z-index: 100;
    fontSize: 22px;
    margin:0;
  `;
 
export default function App(){
    const classes = bodyStyle();
    return(
    <Router>
        {/* <LoginForm/> */}
        <div>
            <Header isLoggedIn = {true}/>
            <GridView/>
            <StyledFab>
                <CreatePostButton isLoggedIn = {true}/>
            </StyledFab>
        </div>
    </Router>
    );
}