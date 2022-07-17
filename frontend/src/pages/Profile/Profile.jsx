import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Feed from "../../components/feed/Feed"
import "./profile.css"
import axios from "axios";

export default function Profile() {

    const [user,setUser] = useState({});
    useEffect(()=>{
        const fetchuser = async()=>{
    
          const res = await axios.get(`${post.userId}`);
          setUser(res.data);
        }
        fetchuser();
      },[post.userId])
  return (
    <>
    
        <Navbar/>
        <div className='profile'>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">

                        <img src="assests/post/1.jpg" alt="" className="profileCoverImg" />
                        <img src="assests/person/1.jpg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Nitish Saini</h4>
                        <span className="profileInfoDe">Hello my friends</span>
                    </div>
                </div>
                <div className="profileRightBottom"></div>
            </div>
        </div>
        <Feed username="john"/>
    </>
  )
}
