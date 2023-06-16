import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <div className='hero-section-container'>
      <Navbar />
      <div className='hero-section'>
        
        <div className='hero-left'>
          <h1>Hello, I'm Thanh. Junior Web Developer.</h1>
          <p></p>
        </div>
        <div className='hero-right'>
          <img src="../public/img/me.png" alt="Thanh's Memoji" />
        </div>
      </div>
    </div>
  )
}

export default Hero
