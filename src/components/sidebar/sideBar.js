import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

    //functions
    const SideBar = () => {
        return (
            <>
                <div class="sideBar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/MyWork">My Work</Link></li>
                            <li><Link to="/Resume">Resume</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                </div>          
            </>
        )
    }

    export default SideBar;

