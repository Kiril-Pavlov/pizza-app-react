import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'><button>Homepage</button></Link>
      <Link to='/about'><button>About</button></Link>
      <Link to='/cartpage'><button>Cart Page</button></Link>
      <Link to='/contact'><button>Contact</button></Link>
    </nav>
  )
}

export default Navbar