import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./post.css"
import {Users} from "../../dummyData";

export default function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [isliked,setisLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1);
        setisLiked(!isLiked);
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
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
                    <img className='likeIcon' src="/assests/like.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="/assests/heart.png" onClick={likeHandler} alt="" />
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
