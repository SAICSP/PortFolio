import Hero from './Components/Hero';
import React, { useEffect, useState } from 'react';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import './main.css'
function App() {
  return (
    <div className="App">
      <Contact/>  
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
