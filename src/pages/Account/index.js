import './index.css'
import closeIcon from '../../assets/images/closeIcon.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Account() {
  return (
    <div className="account-container">
        <footer className="account-footer">
          <button type="button" className="account-button button">Submit</button>
          <button type="button" className="account-button1 button">Cancel</button>
          <button type="button" className="account-button2 button">Print</button>
          <input
            type="date"
            placeholder=" "
            className="account-textinput input"
          />
          <input
            type="date"
            placeholder=" "
            className="account-textinput1 input"
          />
        </footer>
        <header data-role="Header" className="account-header"></header>
        <button type="button" className="account-button3 button">Net To Pay</button>
        <span className="account-text">
          <span>FROM:</span>
          <br />
        </span>
        <span className="account-text3">To:</span>
        <button type="button" className="account-button4 button">
          Counter Sale
        </button>
        <Link to="/"><button type="button" className="account-button5 button">
          <img
            alt="image"
            src={closeIcon}
            className="account-image"
          />
          <span>Button</span>
        </button>
        </Link>
        <span className="account-text5">ACCOUNT</span>
      </div>
  )
}

export default Account