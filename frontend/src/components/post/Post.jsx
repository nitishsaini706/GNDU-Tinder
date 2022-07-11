import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./post.css"

export default function Post({post}) {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assests/person/1.png" alt="" className="postProfileImg" />
                    <span className="postUsername">{post.name}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg"src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assests/like.png" alt="" />
                    <img className='likeIcon' src="/assests/heart.png" alt="" />
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
