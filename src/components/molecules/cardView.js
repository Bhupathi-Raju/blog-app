import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ThumbsupIcon from '@material-ui/icons/ThumbUp'
import ThumbsdownIcom from '@material-ui/icons/ThumbDown'
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginTop : "20px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
    "&:hover":{
      cursor: "pointer",
      color: "blue"
    }
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    color:"red",
    "&:hover":{
      cursor: "pointer",
      color:"grey",
    },
  },
  isFav:{
    color:"red"
  },
  notFav:{
    
  },
  selected:{
    color: "black"
  },
  unselect:{

  },
  route:{
    textDecoration:"inherit",
    color:"inherit"
  }
});

export default function SimpleCard({postDetail, onFavourite, onLike, onDisLike}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to={`/blogs/${postDetail.id}`} className={classes.route}>
        <Typography className={classes.title} variant="h5" component="h2">
          {postDetail.title}
        </Typography>
        </Link>
        <Typography className={classes.pos} color="textSecondary">
          {postDetail.author} | {postDetail.createdOn}
        </Typography>
        <Typography variant="body1" component="p">
          {postDetail.description}
        </Typography>
        <Link to={`/blogs/${postDetail.id}`} className={classes.route}>
        <Typography variant="body2" component="p" className={classes.link}>
          Read More
        </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className = {postDetail.isFav ? classes.isFav : classes.notFav} 
        aria-label="add to favorites" onClick = {()=>(onFavourite(postDetail.id))}>
          <FavoriteIcon />
        </IconButton>
        <IconButton className = {postDetail.likeStatus === 1 ? classes.selected : classes.unselect} 
        aria-label="like" onClick = {()=>(onLike(postDetail.id))}>
          <ThumbsupIcon/>
        </IconButton>
        <p>{postDetail.likes}</p>
        <IconButton className = {postDetail.likeStatus === 2 ? classes.selected : classes.unselect} 
        aria-label="dislike" onClick = {()=>(onDisLike(postDetail.id))}>
          <ThumbsdownIcom/>
        </IconButton>
        <p>{postDetail.disLikes}</p>
      </CardActions>
    </Card>
  );
}
