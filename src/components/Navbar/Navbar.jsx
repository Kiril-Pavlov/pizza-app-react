import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <Link to='/' className='navbar-link'>
          Home
      </Link>
      <Link to='about' className='navbar-link'>
        <div>
          About
        </div>
      </Link>
      <Link to='contact' className='navbar-link'>
        <div>
          Contact
        </div>
      </Link>
    </nav>
  )
}

export default Navbar