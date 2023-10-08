import React, { useState } from 'react';
import {Card,CardContent,Avatar,Typography,IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Pagesstyle.css';
import StoryBar from '../component/Storybar';
import Rightbar from '../component/Rightbar';
import man from '../component/assets/Avatars/man.png';


const Home = ({ posts }) => {
  const [likes, setLikes] = useState(Array(posts.length).fill(false));

  const toggleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  };

  const handleDoubleClick = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = true;
    setLikes(updatedLikes);
  };

  return (
    <div className="dd">
      <StoryBar />
      <Rightbar />

      {posts.map((post, index) => (
        <Card key={index} className="post" sx={{ color: 'white', backgroundColor: 'black' }}>
          <div className="post__header">
            <IconButton color='primary' className="post__dots" >
              <MoreHorizIcon />
            </IconButton>
          </div>
          <div className="post__content">
            <div className="post__user-info">
              <Avatar
                className="post__avatar"
                alt={post.username}
                src="/static/images/avatar/1.jpg"
              />
              <div className="post__username">
                <Typography variant="subtitle2" >{post.username}</Typography>
              </div>
            </div>
            <img
              className="post__image"
              src={post.imageUrl}
              alt={post.caption}
              onDoubleClick={() => handleDoubleClick(index)}
            />
          </div>
          <CardContent>
            <div className="post__buttons">
              <IconButton color={likes[index] ? 'error' : 'primary'} onClick={() => toggleLike(index)}>
                <FavoriteIcon  />
              </IconButton>
              <IconButton color="primary">
                <ChatBubbleOutlineIcon  />
              </IconButton>
              <IconButton color="primary">
                <SendIcon  />
              </IconButton>
              <IconButton color="primary" className="post__save-icon">
                <SaveIcon  />
              </IconButton>
            </div>
            {likes[index] && <Typography variant="body2" color="error">1 like</Typography>}
            <Typography variant="body2">
              <strong>{post.username}</strong> {post.caption}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Card className="post" sx={{ color: 'white', backgroundColor: 'black' }}>
        <div className="post__header">
          <IconButton className="post__dots" >
            <MoreHorizIcon />
          </IconButton>
        </div>
        <div className="post__content">
          <div className="post__user-info">
            <Avatar
              className="post__avatar"
              alt="Default User"
              src={man}
            />
            <div className="post__username">
              <Typography variant="subtitle2" >Default User</Typography>
            </div>
          </div>
          <img
            className="post__image"
            src="https://d2win24dv6pngl.cloudfront.net/media/images/1-logo-GSG.max-600x600.png"
            alt="Default Post Caption"
            onDoubleClick={() => {}}
          />
        </div>
        <CardContent>
          <div className="post__buttons">
            <IconButton color="primary">
              <FavoriteIcon  />
            </IconButton>
            <IconButton color="primary">
              <ChatBubbleOutlineIcon  />
            </IconButton>
            <IconButton color="primary">
              <SendIcon  />
            </IconButton>
            <IconButton color="primary" className="post__save-icon">
              <SaveIcon  />
            </IconButton>
          </div>
          <Typography variant="body2">
            <strong>Default User</strong> This is a default post caption.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
