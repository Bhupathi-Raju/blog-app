import React, { useState, useEffect} from 'react'
import GridView from '../organisms/GridView'
import styed from 'styled-components'
import styled from 'styled-components';
import CreatePostButton from '../atoms/CreatePostButton'
import Container from '@material-ui/core/Container';
import PostData from '../posts.json'


const StyledHomeTemplate = styled.div`
display:"flex",
background-color:red`;

const StyledFab = styled.div`
position: fixed;
margin:0;
`;



export default function HomeTemplate(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        console.log("set", PostData.posts)
        if(posts.length === 0){
            console.log("set", PostData.posts)
            setPosts(PostData.posts);
        }
        // console.log("local", JSON.parse(localStorage.getItem('posts')));
    })

    return(
    <Container component ="main">
    <StyledHomeTemplate>
        <GridView postDetails = {posts} postChangeCallback={(posts)=>setPosts(posts)}/>
        <CreatePostButton isLoggedIn = {true}/>
    </StyledHomeTemplate>
    </Container>
    );
}