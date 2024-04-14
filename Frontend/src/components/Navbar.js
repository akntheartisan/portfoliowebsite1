import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
      <h4>Logo</h4>
    </div>
    <nav>
      <ul className="navul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar