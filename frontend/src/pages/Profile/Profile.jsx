import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./profile.css"

export default function Profile() {
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
    </>
  )
}
