import './Projects.css'
import { Slider as Slider } from './Slider'
import data from './data.json'

const Projects = () => {
  return (
    <>
      <div className='projects-container' id='projects'>
        <Slider data={data} />
      </div>
    </>
  )
}

export default Projects
