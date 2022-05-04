import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: "20px" }}>
      <Link to='/'>
        <div>
          Home
        </div>
      </Link>
      <Link to='about'>
        <div>
          About
        </div>
      </Link>
      <Link to='contact'>
        <div>
          Contact
        </div>
      </Link>
      <Link to='cart'>
        <div>
          CART
        </div>
      </Link>
    </nav>
  )
}

export default Navbar