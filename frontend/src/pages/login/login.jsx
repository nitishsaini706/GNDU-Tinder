import './login.css'
import React from 'react'

export default function login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h1 className="loginLogo">Gndu<span></span>Tinder</h1>
                <span className="loginDesc">
                    Connect with people in university and find your perfect other
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className="loginInput" placeholder='email' />
                    <input type="Password" className="loginInput" placeholder='password'/>
                    <button className="loginButton">Log In</button>
                    <button className="loginForgot">Forgot Password?</button>
                    <button className="loginRegisterButton">Sign Up</button>               
                 </div>
            </div>
        </div>
    </div>
  )
}
