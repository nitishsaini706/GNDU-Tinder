import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Feed from "../../components/feed/Feed"
import "./home.css";

export default function Home() {
    return (
        <div className='homecontainer'>
            <Navbar/>
            <Feed/>
        </div>
    )
}