import React, {useState, useEffect} from 'react'
import SinglePostTemplate from '../templates/SinglePost'


const initialPost = {
    id:1,
    author:"Raju",
    title:"The Print, The Book, The Screen",
    createdOn: "24th Jan 2020",
    description: "Advice to aspiring photographers on understanding the workings of the art market. “Photographs have no meaning on their own. They take on some meaning through the way they are produced and used. They also take on a value or aura based on what carrier they appear on. In the world of photography, the value is almost entirely based on commerce and on a generally unspoken and widely shared sense of elitism. If you want to show your photographs to someone, you will have to think about how to do that”",
    likes: 123,
    disLikes: 12,
    isFav : false,
    likeStatus: 0
};


export default function SinglePostPage({match}){
    // const [post, setPost] = useState([]);
    const id = match.params.id;
    // useEffect(()=>{
    //     if(post.length === 0){
    //         setPost(initialPost)
    //     }
    // })

    return <SinglePostTemplate postId = {id}/>
}