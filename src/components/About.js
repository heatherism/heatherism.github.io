import React, { useState } from 'react';
import bioPhoto from "../assets/bio-photo.JPG";
import { Link } from 'react-scroll'; 
import ProjectModal from './ProjectModal';
import FloatingElements from './FloatingElements';

function About() {


    return (
        <header className="text-center p-80 bg-blue-100">

          
          {/* <FloatingElements /> */}
          <img src={bioPhoto} alt="Your Name" className="mx-auto rounded-full w-64 h-64 object-cover" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" /> 
            
          <h1 className="text-3xl font-bold mt-4" data-aos="fade-right">Hi, I'm Tong Hong</h1>
          <p className="text-xl text-gray-600 mb-6" data-aos="fade-left">I'm a passionate full stack software developer. <br />I love creating beautiful and functional web experiences that make a difference.</p>
          <Link to="projects" smooth={true} duration={500} className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 cursor-pointer">
            View My Work
          </Link>
          {/* Update the href to link to your resume or contact section */}
        </header>
      );
    // return (
    //     <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bioPhoto})` }}>
    //       <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    //         <h1 className="text-white text-4xl font-bold mb-2">Hi, I'm Tong Hong</h1>
    //         <p className="text-white text-xl">
    //           I'm a passionate full-stack developer.
    //         </p>
    //       </div>
    //     </div>
    //   );        
}

export default About;