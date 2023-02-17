import React, {useRef, useEffect} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import SideBar from "../sidebar/sideBar.js" 
import '../sidebar/sidebar.css'


const Navbar = () => {

  const sideBarRef = useRef(null);

  function handleClick() {
    console.log(sideBarRef);
  }

  useEffect(() => {
      console.log(sideBarRef);
  }, [sideBarRef])

  return (
    <>
      <div>

        <Link class="logoContainer" to="/">
          <h1 class="logo">Developed by <span class="name">Vegas Cruz</span></h1>
        </Link>
        <span id="hamburger">
          <label id="nav-icon1" for="nav-menu1">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </span>
        <span id='x'>
          <SideBar class="sideBar" id="sideBar" ref={sideBarRef} />
        </span>
        <nav class="navBar">
          <ul>
              <li><Link class = "links" to="/">Home</Link></li>
              <li><Link class = "links" to="/About">About</Link></li>
              <li><Link class = "links" to="/MyWork">My Work</Link></li>
              <li><Link class = "links" to="/Resume">Resume</Link></li>
              <li><Link class = "links" to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar