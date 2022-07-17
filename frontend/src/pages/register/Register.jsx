import './register.css'
import React, { useRef } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Register() {

    const email  = useRef();
    const password = useRef();
    const handleClick = (e)=>{
        e.preventDefault();
        console.log(email.value)
    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h1 className="loginLogo">Gndu<span><FavoriteBorderIcon className="heart"/>Tinder</span></h1>
                <span className="loginDesc">
                    Connect with people in university and find your perfect other
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSumbit={handleClick}>
                    <input type="text" className="loginInput" placeholder='username' />
                    <input type="Email" className="loginInput" placeholder='email' ref={email} required minLength="6"/>
                    <input type="Password" className="loginInput" placeholder='password' ref={password} required/>
                    <input type="Password" className="loginInput" placeholder='password again'/>
                    <button className="loginButton">Create Account</button>
                    <button className="loginForgot">Forgot Password?</button>
                    <button className="loginRegisterButton">Login</button>               
                 </form>
            </div>
        </div>
    </div>
  )
}
