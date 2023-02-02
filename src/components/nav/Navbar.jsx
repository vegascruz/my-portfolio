import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav class='py-10 pl-2.5 pr-2.5 mb-12 flex justify-between w-screen'>
        <h1 className='text-xl'>Developed by Vegas Cruz</h1>
            <ul className='flex items-center'>
                <li><Link className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" to="/">Home</Link></li>
                <li><Link className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" to="/About">About</Link></li>
                <li><Link className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" to="/Contact">Contact</Link></li>
                <li><Link className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" to="/Resume">Resume</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar