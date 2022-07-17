import "./login.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {

    const email = useRef();
    const pass = useRef();
    const {user,isFetching,error,dispatch} = useContext(AuthContext);
    const handleClick = (e)=>{
        e.preventDefault();
        loginCall(
            {
                email:email.current.value,password:pass.current.value
            },
            dispatch
        );
        console.log(user)
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
                    <button className="loginButton" type="submit">{isFetching ? "Loading" : "Log In"}</button>
                    <button className="loginForgot">Forgot Password?</button>
                    <button className="loginRegisterButton">Sign Up</button>               
                </form>
            </div>
        </div>
    </div>
  )
}
