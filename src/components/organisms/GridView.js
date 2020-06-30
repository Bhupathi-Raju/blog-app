import React,{useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import CardView from '../molecules/cardView'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    gridContainer : {
        display:"flex",
        flexDirection: "column",
        width: "50%",
        margin: "0",
        padding: "20px",
        paddingRight: "20px",
        margin: "auto"
    },
});


const postDetailsJSON = {
    posts:[{
        id:1,
        author:"Raju",
        title:"The Print, The Book, The Screen",
        createdOn: "24th Jan 2020",
        description: "Advice to aspiring photographers on understanding the workings of the art market. “Photographs have no meaning on their own. They take on some meaning through the way they are produced and used. They also take on a value or aura based on what carrier they appear on. In the world of photography, the value is almost entirely based on commerce and on a generally unspoken and widely shared sense of elitism. If you want to show your photographs to someone, you will have to think about how to do that”",
        likes: 123,
        disLikes: 12,
        isFav : false,
        likeStatus: 0
    },
    {
        id:2,
        author:"Bhupathi",
        title:"Taking the plunge",
        createdOn: "25th Jan 2020",
        description: "Ridiculously enjoyable essay about the history and culture of swimming. Never a dull sentence. “The world high-dive record is still held by Alick Wickham, a Solomon Islander who in 1918 dived 205 feet 9 inches from a cliff above the Yarra River in South Australia. He was not so much bothered by the height or water depth as by the chances of hitting the opposite bank. He was successful, although his bathing costumes were ripped off by the impact and he lay in a coma for a week”",
        likes: 12,
        disLikes: 1,
        isFav : true,
        likeStatus: 1
    },
    {
        id:3,
        author:"Bhupathi",
        title:"Taking the plunge",
        createdOn: "25th Jan 2020",
        description: "Ridiculously enjoyable essay about the history and culture of swimming. Never a dull sentence. “The world high-dive record is still held by Alick Wickham, a Solomon Islander who in 1918 dived 205 feet 9 inches from a cliff above the Yarra River in South Australia. He was not so much bothered by the height or water depth as by the chances of hitting the opposite bank. He was successful, although his bathing costumes were ripped off by the impact and he lay in a coma for a week”",
        likes: 12,
        disLikes: 1,
        isFav : true,
        likeStatus: 0
    },
    {
        id:4,
        author:"Raju",
        title:"The Print, The Book, The Screen",
        createdOn: "24th Jan 2020",
        description: "Advice to aspiring photographers on understanding the workings of the art market. “Photographs have no meaning on their own. They take on some meaning through the way they are produced and used. They also take on a value or aura based on what carrier they appear on. In the world of photography, the value is almost entirely based on commerce and on a generally unspoken and widely shared sense of elitism. If you want to show your photographs to someone, you will have to think about how to do that”",
        likes: 123,
        disLikes: 12,
        isFav : false,
        likeStatus: 2
    }
]
}
 
export default function GridView(){
    const [postDetails, setPostDetails] = useState([]);
    
    useEffect(()=>{
        setPostDetails(postDetailsJSON.posts)
    });

    function onFavourited(id){
        const updatedPostDetails = postDetails.map(postDetail => {
            if(postDetail.id === id){
                postDetail.isFav = !postDetail.isFav
            }
            return postDetail
        })
        setPostDetails(updatedPostDetails)
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
        setPostDetails(updatedPostDetails)
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
        setPostDetails(updatedPostDetails)
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
