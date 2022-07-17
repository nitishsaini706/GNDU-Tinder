import { MoreVert } from '@mui/icons-material'
import React ,{useContext, useEffect, useState} from 'react'
import "./post.css"
import axios, { Axios } from "axios";
import {format} from "timeago.js"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Post({post}) {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setisLiked] = useState(false);
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentuser} = useContext(AuthContext);

    useEffect(()=>{
        setisLiked(post.likes.includes(currentuser._id));
    },[currentuser._id,post.likes])

    const likeHandler = ()=>{
        try{
            Axios.pu("/posts"+post._id+"/like",{userId:currentuser._id})
        }catch(err)
        {
             
        }
        setLike(isLiked ? like-1 : like+1);
        setisLiked(!isLiked);
    }

    useEffect(()=>{
        const fetchuser = async()=>{
    
          const res = await axios.get(`/users?userid=${post.userId}`);
          setUser(res.data);
        }
        fetchuser();
      },[post.userId])

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    
                        <img src={user.profilePicture ? PF+user.profilePicture: PF+"person/noAvatar.png"} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </Link>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg"src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className='likeIcon' src={`${PF}heart.png`}  onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomLeft">
                    <span className="postCommnetText">{post.comment} commnets</span>
                </div>
            </div>
        </div>
    </div>
  )
}
