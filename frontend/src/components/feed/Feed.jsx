import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

export default function Feed({username}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user}= useContext(AuthContext)
  const [post,setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{

      const res = username? await axios.get("/posts/profile/"+username):await axios.get("posts/timeline/"+user._id);
      setPosts(res.data);
    }
    fetchPosts();
  },[username,user._id])

  return (
    <div className='feed'>
        <div className="feedWrapper">
            <Share/>
            {post.map((p)=>(

            <Post key={p._id} post={p} />
            ))}
            
        </div>
    </div>
  )
}
