import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Feed from "../../components/feed/Feed"
import "./home.css";
import Profile from '../Profile/Profile';

export default function Home() {
    return (
        <div className='homecontainer'>
            <Navbar/>
            
            <Feed/>
            {/* <Profile/> */}
            
        </div>
    )
}