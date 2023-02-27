import React, {useState, useRef, useEffect} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = ({openSidebar}) => {

  return (
    <>
      <div>

        <Link class="logoContainer" to="/My-Portfolio/">
          <h1 class="logo">Developed by <span class="name">Vegas Cruz</span></h1>
        </Link>
        <nav class="navBar">
          <ul>
              <li><Link class = "links" to="/My-Portfolio/">Home</Link></li>
              <li><Link class = "links" to="/My-Portfolio/About">About</Link></li>
              <li><Link class = "links" to="/My-Portfolio/Contact">Contact</Link></li>
              <li><Link class = "links" to="/My-Portfolio/MyWork">My Work</Link></li>
              <li><Link class = "links" to="/My-Portfolio/Resume">Resume</Link></li>
              <li><Link class = "links" to="/My-Portfolio/SignIn">Sign In</Link></li>
          </ul>
        </nav>
        <div class='burger' onClick={openSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default Navbar