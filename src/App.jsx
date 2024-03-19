import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/intro'
import Marque from './components/marque'
import About from './components/about'
import Play from './components/Play'
import Project from './components/Project'
import Skills from './components/Skills'
import LocomotiveScroll from 'locomotive-scroll';
import Certification from './components/Certification'
import Resume from './components/Resume'
import Footer from './components/Footer'




function App() {
 

const locomotiveScroll = new LocomotiveScroll();

  return (
 
 
    <div>
  

 
     <Navbar />
    
    <Intro/>
   <Marque/>
   
  <About/>

  <Play/>
 

  <Project/>
 <Skills/>
 <Certification/>
<Resume/>
<Footer/>

  </div>

  )
}

export default App