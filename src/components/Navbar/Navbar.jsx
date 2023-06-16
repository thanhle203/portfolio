import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className='navbar-links'>

                <img src="../public/img/name-initial-logo.png" alt="logo"/>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>

            <div>
                <button>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
