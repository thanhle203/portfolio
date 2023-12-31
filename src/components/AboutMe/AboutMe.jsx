import React from 'react'
import './AboutMe.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, RenderTexture, PerspectiveCamera } from '@react-three/drei'
import Cube from './Cube'

const AboutMe = () => {
  return (
    <div className='aboutme-section-container' id='aboutme'>
      <div className='aboutme-section'>
        
        <div className='aboutme-left'>
          <Canvas camera={{fov: 59, position: [3.5, 3.5, 3.5]}}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={4} />
            <directionalLight position={[3,2,1]} />
            <Cube />
          </Canvas>
        </div>

        <div className='aboutme-right'>
          <h2>I am a junior web developer aspiring to become a full stack developer. 
            With a <strong>strong</strong> foundation in frontend languages such as HTML, CSS, JavaScript, and React.js, as well as some backend languages like Python, SQL, and Java, I aim to create dynamic and user-friendly online experiences.
            I'm familiar with some essential web development tools like MySQL, Git, and other toolkits such as scikit-learn, NumPy, and Pandas for web-scraping.
            Eager to gain real-world experience, I'm a fast learner who thrives in dynamic environments and embraces new technologies. 
            My goal is to grow as a programmer, collaborate effectively within teams, and build remarkable web applications that make a positive impact. </h2>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
