import React from 'react'
import './share.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {Label,Room,EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="shareTop">
                <img src="/assests/person/1.png" alt="" className="shareProfileImg" />
                <input className="shareInput" placeholder="what's in your mind bro" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <AddAPhotoIcon  className='marginIcons'/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
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
            <button className='shareButton'>Share</button>
            </div>

        </div>
    </div>
  )
}
