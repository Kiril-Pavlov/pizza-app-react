import React from 'react'

import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer-container'>
      
      <div className='footer-copyright'>
        Copyright @ {new Date().getFullYear()}
      </div>
      <div className='footer-link'>
         developed by <a href="https://pavlov.mk/">Pavlov Kiril</a>
      </div>
    </footer>
  )
}

export default Footer