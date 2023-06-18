import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <div className='hero-section-container'>
      <div className='hero-section' id='home'>
        
        <div className='hero-left'>
          <h1>Hello, I'm Thanh. Junior Web Developer.</h1>
          <h2>Scroll down for more info</h2>
        </div>
        <div className='hero-right'>
          <img src="./img/coding-icon.png" alt="coding symbol" />
        </div>
      </div>
    </div>
  )
}

export default Hero
