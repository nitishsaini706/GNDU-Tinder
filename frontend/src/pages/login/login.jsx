import "./login.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useRef } from "react";

export default function Login() {

    const email = useRef();
    const pass = useRef();
    const handleClick = (e)=>{
        e.preventDefault();
        console.log(email.current.value)
    };
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
                <form className="loginBox" onClick={handleClick}>
                    <input type="email" className="loginInput" placeholder='email' ref={email} required />
                    <input type="password" className="loginInput" placeholder='password' ref={pass} minLength="6" required/>
                    <button className="loginButton">Log In</button>
                    <button className="loginForgot">Forgot Password?</button>
                    <button className="loginRegisterButton">Sign Up</button>               
                </form>
            </div>
        </div>
    </div>
  )
}
