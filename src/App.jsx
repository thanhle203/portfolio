import Hero from "./components/Hero/Hero"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
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
