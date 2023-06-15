import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import styled from 'styled-components'
import "./App.css"

function App() {

  return (
    <div className="mainContainer">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
