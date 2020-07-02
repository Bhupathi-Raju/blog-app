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
import HomePage from './components/pages/HomePage'
import SinglePostPage from './components/pages/SinglePostPage'
import CreatePost from './components/organisms/CreatePost'
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

export default function App(){
    return(
    <Router>
        <div>
        <Header/>
        <Switch>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/login" component = {LoginForm}/>
        <Route path="/createblog" component={CreatePost}/>
        <Route path="/blogs/:id" component={SinglePostPage}/>
        </Switch>
        </div>
    </Router>
    );
}