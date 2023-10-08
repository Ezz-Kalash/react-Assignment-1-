import React from 'react'
import Avatar from '@mui/material/Avatar';
import boy from '../component/assets/Ezz.png';
import Button from '@mui/material/Button';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



import "./Pagesstyle.css"

export default function Profile() {

  
    return (
    <div id="profile">
        <div id="top">
            
        <Avatar id="img" sx={{width:160,height:160}} src={boy}/>

        <h2 id="name">Ezz_Kalash</h2>
        <Button id="butt" variant="contained" >Edit Profile</Button>
            <Button id="butt" variant="contained">View actions</Button>
            <img src={SettingsOutlinedIcon} alt="" />

            <div id="stats">
            <p id="p">5 Posts</p>
            <p id="p">211 follower</p>
            <p id="p">300 Following</p>
            </div>
            <div id="bio">
            <p id="p">ezzalden kalash</p>
            <p id="p">CSE | AAUP</p>
            </div>
            </div>
            


        
        </div>
  )
}
