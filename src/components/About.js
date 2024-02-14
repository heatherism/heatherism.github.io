import React, { useState } from 'react';
import bioPhoto from "../assets/bio-photo.JPG";
import { Link } from 'react-scroll'; 
import ProjectModal from './ProjectModal';
import FloatingElements from './FloatingElements';
import LetsChatButton from './LetsChatButton';

function About() {


    return (
        <header className="text-center bg-blue-100 header">

          
          {/* <FloatingElements /> */}
          <img src={bioPhoto} alt="Tong Hong" className="mx-auto rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" /> 
            
          <h1 className="text-3xl font-bold mt-8 mb-4 md:mb-6" data-aos="fade-right">
            Hi, I'm Tong Hong
          </h1>
          <p className="text-xl text-gray-600 mb-6" data-aos="fade-left" style={{pointerEvents: "none"}}>
            <span className="text-blue-350 text-2xl">A Full-Stack Software Developer from Bay Area, California</span>. <br /> 
            
            I love creating beautiful and functional web experiences that make a difference.
          </p>
          <Link to="projects" smooth={true} duration={500} className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 cursor-pointer">
            View My Work
          </Link>
          {/* Update the href to link to your resume or contact section */}
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <LetsChatButton />
          </div>
        </header>
      );
      
}

export default About;