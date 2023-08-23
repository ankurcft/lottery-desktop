import './index.css'
import closeIcon from '../../assets/images/closeIcon.png'
import React from 'react'
import { Link } from 'react-router-dom'


function ChangePass() {
  return (

    <div>
        <div className="change-pass-container">
        <footer className="change-pass-footer"></footer>
        <header data-role="Header" className="change-pass-header"></header>
        <Link to="/"><button type="button" className="change-pass-button button">
          <img
            alt="image"
            src={closeIcon}
            className="change-pass-image"
          />
          <span>Button</span>
        </button>
        </Link>
        <span className="change-pass-text1">CHANGE PASSWORD</span>
        <span className="change-pass-text2">Old Password:</span>
        <span className="change-pass-text3">New Password:</span>
        <span className="change-pass-text4">ConfirmNew Password:</span>
        <input
          type="text"
          placeholder=" "
          className="change-pass-textinput input"
        />
        <input
          type="text"
          placeholder=" "
          className="change-pass-textinput1 input"
        />
        <input
          type="text"
          placeholder=" "
          className="change-pass-textinput2 input"
        />
        <button type="button" className="change-pass-button1 button">Submit</button>
        <span className="change-pass-text5">Keep Changing Your Password.</span>
        <button type="button" className="change-pass-button2 button">Cancel</button>
      </div>
    </div>
  )
}
export default ChangePass