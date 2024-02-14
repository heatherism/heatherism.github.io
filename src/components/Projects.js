import React, {useState} from 'react';
// Example project image
import projectImage1 from '../assets/EasyOrder - menu based on restaurant.png';
import projectImage2 from '../assets/project 2 look.png';
import projectImage4 from '../assets/groovehub - home.png';
import projectImage3 from '../assets/miniChat - real-time PDF interaction.png';
import groupProjectImage from '../assets/groupProjectImage.png'
import ProjectModal from './ProjectModal';

function Projects() {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[selectedProject, setSelectedProject] = useState({});

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    }

    const projects = [
        {
          name: "EasyOrder",
          description: "Spring Boot Based Web Application",
          image: projectImage1,
          link: "#", // Link to project
        },
        {
          name: "&Share",
          description: "Cloud and React Based Social Network",
          image: projectImage2,
          link: "#",
        },
        {
          name: "miniChat",
          description: "Web Based AI Agent for PDF Queries",
          image: projectImage3,
          link: "#",
        },
        {
          name: "GrooveHub",
          description: "Kotlin Android App",
          image: projectImage4,
          link: "#",
        },
        {
          name: "TripPlanner",
          description: "Go and Google Maps API-Based Application",
          image: groupProjectImage,
          link: "#",
        }
      ];
    
      return (
        <section id="projects" className="bg-blue-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
              {projects.map((project, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-56 object-cover object-center"/>
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <button onClick={() => openModal(project)} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
                      View Project
                    </button>
                  </div>
                </div>
              ))}
              <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
            </div>
          </div>
        </section>
      );
}

export default Projects;