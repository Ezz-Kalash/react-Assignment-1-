import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import boy from './assets/Avatars/boy.png';
import man from './assets/Avatars/man.png';
import nurse from './assets/Avatars/nurse.png';
import assistant from './assets/Avatars/shop-assistant.png';
import singer from './assets/Avatars/singer.png';
import steward from './assets/Avatars/steward.png';

const stories = [
  { imageUrl: boy, name: 'Boy', unread: true },
  { imageUrl: man, name: 'Man', unread: false },
  { imageUrl: nurse, name: 'Nurse', unread: false },
  { imageUrl: assistant, name: 'Assistant', unread: true },
  { imageUrl: singer, name: 'Singer', unread: false },
  { imageUrl: steward, name: 'ezz', unread: false },

];

const CircularFrame = ({ children }) => (
  <div
    style={{
      width: '88px',
      height: '88px',
      background: 'linear-gradient(45deg, #FFD68A, #9F2B00, #FF33FF)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

const StoryBar = () => {
  return (
    <div className='Storybar'>
    <Box  sx={{ display: 'flex', overflowX: 'auto', p: 1, bgcolor: '#00000', borderBottom: '1px solid #d00dd' }}>
      {stories.map((story, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 2 }}>
          <CircularFrame>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'black',
              }}
              alt={`Story ${index + 1}`}
              src={story.imageUrl}
            />
          </CircularFrame>
          <Typography variant="body2" sx={{ color: 'white' }}>{story.name}</Typography>
        </Box>
      ))}
    </Box></div>
  );
};

export default StoryBar;
