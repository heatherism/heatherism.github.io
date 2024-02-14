// FloatingBubbles.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ResumeModal from './ResumeModal';

const FloatingBubbles = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const toggleResumeModal = () => {
    console.log('Toggling Resume Modal'); //debugging line
    setIsResumeOpen(!isResumeOpen);
  };


  return (
    <>
      {/* Bubble for the Contact section */}
      <Link to="contact" className="bubble float1" smooth={true} duration={500} style={{ left: '15%', top: '40%', position: 'absolute' }}>
        Contact
      </Link>

      {/* Bubble for the My Journey section */}
      <Link to="story" className="bubble float2" smooth={true} duration={500} style={{ right: '30%', top: '30%', position: 'absolute' }}>
        My Journey
      </Link>

      {/* Bubble for the My Project section */}
      <Link to="projects" className="bubble float3" smooth={true} duration={500} style={{ right: '55%', top: '15%', position: 'absolute' }}>
        My Projects
      </Link>

      <div className="bubble float1" onClick={toggleResumeModal} style={{ right: '15%', top: '55%', position: 'absolute' }}>
        Download CV
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={toggleResumeModal} />
    </>
  );
};

export default FloatingBubbles;

