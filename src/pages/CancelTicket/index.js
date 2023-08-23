import './index.css'
import closeIcon from '../../assets/images/closeIcon.png'
import React from 'react'
import { Link } from 'react-router-dom'

function CancelTicket() {
  return (
    <div className="cancel-ticket-container">
      <footer className="cancel-ticket-footer"></footer>
      <header data-role="Header" className="cancel-ticket-header"></header>
      <Link to="/"><button type="button" className="cancel-ticket-button button">
        <img
          alt="image"
          src={closeIcon}
          className="cancel-ticket-image"
        />

        <span>Button</span>
      </button>
      </Link>
      <span className="cancel-ticket-text1">CANCEL TICKET</span>
    </div>
  )
}

export default CancelTicket