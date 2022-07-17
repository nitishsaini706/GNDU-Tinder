import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Feed from "../../components/feed/Feed"
import "./home.css";
import Profile from '../Profile/Profile';
import Login from "../login/Login"
import Register from "../register/Register"

export default function Home() {
    return (
        <div className='homecontainer'>
            {/* <Navbar/>
            
            <Feed/> */}

            {/* <Profile/> */}
            <Login/>
            {/* <Register/> */}
            
        </div>
    )
}