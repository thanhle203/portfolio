import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-links'>
            <div className='logo'>
                <a href="#home"><img src="../public/img/name-initial-logo.png" alt="logo"/></a>
            </div>

            <div className='navbar-sections'>
                <p><a href="#home">Home</a></p>
                <p><a href="#aboutme">About Me</a></p>
                <p><a href="#skills">Skills</a></p>
                <p><a href="#projects">Projects</a></p>
            </div>
        </div>

        <div className='resume'>
            <button>Resume</button>
        </div>
        
    </div>
  )
}

export default Navbar
