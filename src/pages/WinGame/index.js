import './index.css'
import balaJiIcon from '../../assets/images/balajiPic.png'
import okIcon from '../../assets/images/okIcon.png'
import React from 'react'

function WinGame() {
  return (
    <div className="win-container">
        <div className="win-container1">
          <header data-role="Accordion" className="win-header">
            <span className="win-text">CONGRATULATIONS !!!</span>
          </header>
          <img
            alt="image"
            src={balaJiIcon}
            className="win-image"
          />
          <footer className="win-footer"></footer>
          <button type="button" className="win-button button">
            <img
              alt="image"
              src={okIcon}
              className="win-image1"
            />
            <span>Button</span>
          </button>
        </div>
      </div>
  )
}

export default WinGame