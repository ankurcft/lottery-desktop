import './index.css'
import coverPic from '../../assets/images/cover.png'
import React, { useState } from 'react'
// import handleCloseApp from '../../utils/closeApp'
import handleCloseApp from '../../utils/closeApp'

function SignIn() {
  const [credentials,setCredentials] =useState({})

  const handleInput =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
    console.log(credentials)
  }

  return (
    <div className="login-container">
    <img
      src={coverPic}
      alt="cover pic"
      className="login-image"
    />
    <form action="index.php" method="post">
    <span className="login-text">Login:</span>
    <span className="login-text1">Password:</span>
    <input
      type="text"
      placeholder=" "
      id="email"
      className="login-textinput input"
      name="email"
      onChange={handleInput}
    />
    <input type="submit" id="login" className="login-button button" value="Login"></input>
    <button type="" className="close-button button"  >Close</button>
    <input
      type="text"
      placeholder=" "
      id="pass"
      name="pass"
      className="login-textinput1 input"
      onChange={handleInput}
    />
    </form>
  </div>
  )
}
export default SignIn