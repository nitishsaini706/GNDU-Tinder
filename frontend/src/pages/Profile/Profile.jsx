import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Feed from "../../components/feed/Feed"
import "./profile.css"
import axios from "axios";
import {useParams} from 'react-router'; 

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;
    const [user,setUser] = useState({});
    useEffect(()=>{
        const fetchuser = async()=>{
    
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
        }
        fetchuser();
      },[])
  return (
    <>
    
        <Navbar/>
        <div className='profile'>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">

                        <img src={user.coverPicture || PF+"person/noCover.png"} alt="" className="profileCoverImg" />
                        <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>{user.username}</h4>
                        <span className="profileInfoDe">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom"></div>
            </div>
        </div>
        <Feed username={`${username}`}/>
    </>
  )
}
