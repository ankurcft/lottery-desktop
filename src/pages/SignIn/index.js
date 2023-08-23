import './index.css'
import coverPic from '../../assets/images/cover.png'
import React from 'react'

function SignIn() {
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
      id="login"
      className="login-textinput input"
      name="login"
    />
    <input type="submit" className="login-button button" value="Login"></input>
    <button type="" className="close-button button" value="Close">Close</button>
    <input
      type="text"
      placeholder=" "
      id="pass"
      className="login-textinput1 input"
    />
    </form>
  </div>
  )
}
export default SignIn