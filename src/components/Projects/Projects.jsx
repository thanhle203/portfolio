import React from 'react'
import './Projects.css'

const data = [
  {
    name: "GPT-3",
    desc: "A fake responsive website about GPT-3 that is supposed to inform about the potentials of AI and request backers to help fund the vision.",
    img: "./img/gpt3-img.png",
  },
]

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='projects-section'>
        <div className='projects-cards-container'>
          <div className='projects-cards'>
            {data.map((item) => (
              <>
                
              <div className='projects-image-content'>
                <span className='overlay'>
                  <img src={item.img} alt="" className='card-img' />
                </span>

                <div className='projects-cards-image'>
                  {/**/}
                </div>
              </div>

              <div className='projects-cards-content'>
                <h2 className='name' key={item} >{item.name}</h2>
                <p className="description" key={item} >{item.desc}</p>
              
                <div className='buttons'>
                  <button className='button-1'>View Code</button>
                  <button className='button-2'>Live Demo</button>
                </div>
              </div>

            </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
