import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

    //functions
    const SideBar = () => {
        return (
            <>
                <div class="sideBar">
                        <ul>
                            <li><Link to="/My-Portfolio/">Home</Link></li>
                            <li><Link to="/My-Portfolio/About">About</Link></li>
                            <li><Link to="/My-Portfolio/Contact">My Work</Link></li>
                            <li><Link to="/My-Portfolio/MyWork">Resume</Link></li>
                            <li><Link to="/My-Portfolio/Resume">Contact</Link></li>
                        </ul>
                </div>          
            </>
        )
    }

    export default SideBar;

