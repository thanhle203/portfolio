import './Projects.css'
import { Slider as Slider } from './Slider'

const data = [
  {
    name: "GPT-3",
    desc: "A fake responsive website about GPT-3 that is supposed to inform about the potentials of AI and request backers to help fund the vision.",
    img: "./img/gpt3-img.png",
  },
  {
    name: "Wedding RSVP",
    desc: "A RSVP website for a wedding where guests can check necessary information and RSVP for the wedding.",
    img: "./img/wedding-rsvp.jpg",
  },
]

const Projects = () => {
  return (


    <>
      <div className='projects-container' id='projects'>
        <Slider />
      
      </div>
    </>


    /*<div className='projects-container swiper' id='projects'>
      <div className='projects-section'>
        <div className='projects-cards-container swiper-wrapper'>
          <div className='swiper-slide'>
              {data.map((item) => (
              <>
                <SwiperSlide key={item.name}>
                  <div className='projects-cards'>
                    <div className='projects-image-content'>
                      <span className='overlay'>
                        <img src={item.img} alt="" className='card-img' />
                      </span>

                      <div className='projects-cards-image'>
                        {/*}
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
                  </div>
              </>
              ))}
            
          </div>
        </div>
      </div>
    </div>*/
  )
}

export default Projects
