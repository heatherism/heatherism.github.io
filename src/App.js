import React, {useEffect} from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skill';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectModal from './components/ProjectModal';
import Story from './components/Story';
import FloatingElements from './components/FloatingElements';
import FloatingBubbles from './components/FloatingBubbles';
import ScrollToTop from './components/ScrollToTop';
import SkillsSection from './components/SkillsSection';



import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });

  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        
        <FloatingBubbles />
        <About />
        <Story />
        <Projects />
        
        <Contact />
        <ScrollToTop />
      </div>
    </BrowserRouter>  
  );
}

export default App;
