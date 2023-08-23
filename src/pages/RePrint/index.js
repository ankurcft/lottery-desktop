import './index.css'
import closeIcon from '../../assets/images/closeIcon.png'
import React from 'react'
import { Link } from 'react-router-dom'

function RePrint() {
  return (
    <div className="reprint-container">
      <footer className="reprint-footer"></footer>
      <header data-role="Header" className="reprint-header"></header>
      <span className="reprint-text">REPRINT</span>
      <Link to="/"><button type="button" className="reprint-button button">
        <img
          alt="image"
          src={closeIcon}
          className="reprint-image"
        />
        <span>Button</span>
      </button>
      </Link>
    </div>
  )
}

export default RePrint