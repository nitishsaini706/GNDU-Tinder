import './register.css'
import React, { useRef } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useHistory} from "react-router";
import axios from 'axios';

export default function Register() {

    const username  = useRef();
    const email  = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value)
        {
            password.current.setCustomValidity("passwords dont match");
        }
        else
        {
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            };
            try{
                
                await axios.post("/auth/register",user);
                history.push("/login");
            }catch(err)
            {
                console.log(err);
            }
        }
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
                <form className="loginBox" onSumbit={handleClick}>
                    <input type="text" className="loginInput" placeholder='username' ref={username} />
                    <input type="email" className="loginInput" placeholder='email' ref={email} required minLength="6"/>
                    <input type="password" className="loginInput" placeholder='password' ref={password} required minLength={"6"}/>
                    <input type="password" className="loginInput" placeholder='password again' ref={passwordAgain}/>
                    <button className="loginButton" type="submit">Create Account</button>
                    <button className="loginForgot">Forgot Password?</button>
                    <button className="loginRegisterButton">Login</button>               
                 </form>
            </div>
        </div>
    </div>
  )
}
