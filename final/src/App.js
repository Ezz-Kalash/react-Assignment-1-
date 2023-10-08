import './App.css';
import Home from './pages/Home';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Progress from './pages/Progress';
import Leftbar from './component/Leftbar'; 
import Exeplore from './pages/Exeplore';
import Profile from './pages/Profile';
import Messeges from './pages/messeges';
import { createTheme, ThemeProvider } from '@mui/material/styles';


  function App() {
    const theme = createTheme({
      palette: {
        primary: {
          main: '#FFFFFF',
        },
        secondary: {
          main: '#0000FF',
        },
      },
    });
    const [posts, setPosts] = useState([]);
  
    const handlePost = (newPost) => {
      setPosts([newPost, ...posts]);
    };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter className="App">
        <div className="App">
        <Leftbar onPost={handlePost} />
          <Routes>
            <Route path="/Home" element={<Home posts={posts} />} />
            <Route path="/prof" element={<Profile />} />
            <Route path="/prog" element={<Progress />} />
            <Route path="/exp" element={<Exeplore />} />
            <Route path="/messeges" element={<Messeges />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
