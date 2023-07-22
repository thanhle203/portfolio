import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='projects-section'>
        <div className='projects-cards-container'>
          <div className='projects-cards'>
            <div className='projects-image-content'>
              <span className='overlay'>
                <img src=".\public\img\gpt3-img.png" alt="" className='card-img' />
              </span>

              <div className='projects-cards-image'>
                {/**/}
              </div>
            </div>

            <div className='projects-cards-content'>
              <h2 className='name'>
                GPT-3 Project
              </h2>
              <p className="description">A fake responsive website about GPT-3 that is supposed to simulate the potentials of AI and request backers to develop it.</p>

              <div className='buttons'>
                <button className='button-1'>View Code</button>
                <button className='button-2'>Live Demo</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
