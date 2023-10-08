import React, { useState } from 'react';
import instalogo from "./assets/instagram-logo.png";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCardIcon from '@mui/icons-material/AddCard';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import boy from '../component/assets/Ezz.png';
import "./components.css";
import PostForm from "./PostForm"; 

function Leftbar({ onPost }) {
  const [showPostForm, setShowPostForm] = useState(false);

  const handlePost = (newPost) => {
    onPost(newPost);
    setShowPostForm(false);
  };

  return (
    <div className='leftbar'>
      <img id="insta" src={instalogo} alt="instalogo" width={"100px"} />
      <Link id="but" to="/Home">
        <ListItemButton>
          <HomeIcon fontSize='small' /> Home
        </ListItemButton>
      </Link>

      <Link to="/prog">
        <ListItemButton id="but" color='white'>
          <SearchIcon fontSize='small' /> Search
        </ListItemButton>
      </Link>

      <Link to="/exp">
        <ListItemButton id="but">
          <ExploreIcon fontSize='small' /> Explore
        </ListItemButton>
      </Link>

      <Link to="/prog">
      <ListItemButton id="but">
        <SlideshowIcon fontSize='small' /> Reels
      </ListItemButton>
      </Link>

      <Link to="/messeges">
      <ListItemButton id="but">
        <ChatIcon fontSize='small' /> Messages
      </ListItemButton>      </Link>

      <Link to="/prog">
      <ListItemButton id="but">
        <FavoriteBorderIcon fontSize='small' /> Notification
      </ListItemButton>
      </Link>

          <ListItemButton variant="contained" color="primary" onClick={() => setShowPostForm(!showPostForm)}>
          <AddCardIcon/>
          Create Post
          </ListItemButton>

      {showPostForm && (
        <PostForm onPost={handlePost} />
      )}

      <Link id="but" to="/prof">
        <ListItemButton id="but">
          <Avatar src={boy} />
          <ListItemText primary="Ezzkalash" secondary="ezzo" />
        </ListItemButton>
      </Link>

      <ListItemButton>
        <MenuIcon fontSize='small' /> Menu
      </ListItemButton>
    </div>
  );
}

export default Leftbar;
