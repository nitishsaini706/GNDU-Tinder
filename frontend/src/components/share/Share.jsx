import React, { useContext, useRef, useState } from 'react'
import './share.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {Label,Room,EmojiEmotions} from '@mui/icons-material'
import {AuthContext} from "../../context/AuthContext"
import axios from 'axios';

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [file,setFile]=useState(null);
    const handleSubmit =async (e)=>{

        e.preventDefault();
        const newPost = {
            userId: user.id,
            desc:desc.current.value
        }

        try{
            await axios.post("posts",newPost);
        }catch(err){}
    }
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="shareTop">
                <img src={user.profilePicture ? PF+user.profilePicture: PF+"person/noAvatar.png"} alt="" className="shareProfileImg" />
                <input className="shareInput" placeholder={"what's in your mind bro"+user.username+"?"} ref={desc} />
            </div>
            <hr className='shareHr'/>
            <form className="shareBottom" onSubmit={handleSubmit}>
                <label htmlFor='file' className="shareOptions">
                    <AddAPhotoIcon  className='marginIcons'/>
                    <span className='shareOptionText'>Photo or Video</span>
                    <input type="file" id="file" accept=".png,.jpg,.jpeg" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
                <div className="shareOptions">
                    <Room htmlColor="blue" className='marginIcons'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOptions">
                    <Label htmlColor="green" className='marginIcons'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOptions">
                    <EmojiEmotions htmlColor="tomato" className='marginIcons'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            <button className='shareButton' type='submit'>Share</button>
            </form>

        </div>
    </div>
  )
}
