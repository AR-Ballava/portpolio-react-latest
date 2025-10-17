import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
      {/* <Experience /> */}
      {/* <div className="container"></div> */}
      {/* <Skills /> */}
    </div>
  )
}

export default App