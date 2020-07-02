import React,{useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import CardView from '../molecules/cardView'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    gridContainer : {
        display:"block",
        flexDirection: "column",
        width: "50%",
        margin: "0",
        padding: "20px",
        paddingRight: "20px",
        margin: "auto"
    },
});

 
export default function GridView({postDetails, postChangeCallback}){
    // const [postDetails, setPostDetails] = useState([]);
    // console.log("id", postId)
    // useEffect(()=>{
    //     if(postId && postDetails.length === 0){
    //             const singlePostArray = postDetails.filter(post => post.id === postId)
    //             setPostDetails(singlePostArray)
    //             console.log("single", singlePostArray)
    //         }
    //     if(postDetails.length === 0){
    //         setPostDetails(postDetailsJSON.posts)
    //     }
        // else if(postId && postDetails.length === 0){
        //     const singlePostArray = postDetails.filter(post => post.id === postId)
        //     setPostDetails(singlePostArray)
        //     console.log("single", postDetails)
        // }
    // });

    // function savetoLocal(postDetails){
    //     localStorage.setItem('posts', JSON.stringify(posts));
    // }

    function onFavourited(id){
        const updatedPostDetails = postDetails.map(postDetail => {
            if(postDetail.id === id){
                postDetail.isFav = !postDetail.isFav
            }
            return postDetail
        })
        // savetoLocal(updatedPostDetails)
        postChangeCallback(updatedPostDetails)
    }

    function onLike(id){
        const updatedPostDetails = postDetails.map(postDetail => {
            if(postDetail.id === id){
                postDetail.disLikes -= (postDetail.likeStatus === 2 ? 1 : 0);
                postDetail.likes += (postDetail.likeStatus === 1 ? -1 : 1);
                postDetail.likeStatus = (postDetail.likeStatus === 1 ? 0 : 1);
            }
            return postDetail
        })
        // savetoLocal(updatedPostDetails)
        postChangeCallback(updatedPostDetails)
    }

    function onDisLike(id){
        const updatedPostDetails = postDetails.map(postDetail => {
            if(postDetail.id === id){
                postDetail.likes -= (postDetail.likeStatus === 1 ? 1 : 0);
                postDetail.disLikes += (postDetail.likeStatus === 2 ? -1 : 1);
                postDetail.likeStatus = (postDetail.likeStatus === 2 ? 0 : 2);
            }
            return postDetail
        })
        // savetoLocal(updatedPostDetails)
        postChangeCallback(updatedPostDetails)
    }
    

    const classes = useStyles();
    const postItems = postDetails.map((postDetail) => {
        return (
        <li key={postDetail.id} style = {{display:"inline-block"}}>
                <CardView postDetail = {postDetail} onFavourite = {onFavourited} onLike={onLike} onDisLike={onDisLike}/>
        </li>
        );})
    return(
    <div>
        <ul className = {classes.gridContainer}>
            {postItems}
        </ul>
    </div>
    );
}
