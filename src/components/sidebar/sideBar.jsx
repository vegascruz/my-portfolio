import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

    //functions
    const SideBar = ({sidebar}) => {
        return (
            <>
                <div className={sidebar?"sideBar sideBar--open":"sideBar"}>
                        <ul>
                            <li><Link to="/My-Portfolio/">Home</Link></li>
                            <li><Link to="/My-Portfolio/About">About</Link></li>
                            <li><Link to="/My-Portfolio/Contact">Contact</Link></li>
                            <li><Link to="/My-Portfolio/MyWork">My Work</Link></li>
                            <li><Link to="/My-Portfolio/Resume">Resume</Link></li>
                        </ul>
                </div>          
            </>
        )
    }

    export default SideBar;

