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
          description: "Feature-rich Spring Boot backend and React frontend for seamless menu exploration, ordering, and checkout processes.",
          overview: "Spring Boot Based Web Application",
          image: projectImage1,
          technologies: "Amazon Web Services (AWS), Spring Security, Spring Boot, React.js, Docker, PostgreSQL, Hibernate",
          features: "CRUD REST APIs, Spring Data JDBC, session-based authentication, React with Ant Design, Docker containerization, AWS deployment",
        },
        {
          name: "&Share",
          overview: "Cloud and React Based Social Network",
          description: "Project Overview: A React-based social networking platform enabling multimedia interaction and content management.",
          technologies: "Elasticsearch, Go, User Authentication, JSON Web Token (JWT), Responsive Web Design, React.js, Google App Engine",
          features: "React Router v4, JSON Web Tokens (JWT), Go backend, Google App Engine deployment, ElasticSearch, Google Cloud Storage, Advanced search functionality",
          image: projectImage2,          
        },
        {
          name: "miniChat",
          overview: "Web Based AI Agent for PDF Queries",
          description: "React-based conversational UI for real-time interaction with PDF documents, integrating OpenAI's GPT-3.5 Turbo API.",
          technologies: "React.js, Express.js, Node.js, OpenAI's GPT-3.5 Turbo API, Langchain, Text-to-Speech (TTS), Voice Recognition",
          features: "RESTful APIs, in-memory vector store, integration of GPT-3.5 Turbo API, text and voice-based user interactions",
          image: projectImage3,
 
        },
        {
          name: "GrooveHub",
          overview: "Kotlin Android based App for music streaming",
          description: "Android music streaming app developed using Kotlin, featuring the Android Jetpack Library and Hilt Dependency Injection.",
          technologies: "Kotlin, Android Jetpack, Hilt Dependency Injection, Retrofit, MVVM Architecture",
          features: "Kotlin, Android Jetpack Library, Hilt, Retrofit for network communication, modern UI with Jetpack Compose, Jetpack Navigation component",
          image: projectImage4,
        },
        {
          name: "TripPlanner",
          overview: "Go and Google Maps API-Based Application",
          description: "Collaboration in the development of TripPlanner, a trip planning application utilizing Go for backend logic and Google Maps API for mapping features.",
          technologies: "Go, PostgreSQL, JSON Web Token (JWT), Google Maps API, RESTful API design",
          features: "Backend development with Go, PostgreSQL database schema design, JWT-based secure operations, Google Maps API integration, collaborative team development",
          image: groupProjectImage,
        }
      ];
    
      return (
        <section id="projects" className="bg-blue-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up" >My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
              {projects.map((project, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-56 object-cover object-center"/>
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.overview}</p>
                    <button onClick={() => openModal(project)} className="mt-4 bg-blue-500 text-white px-6 py-2 hover:bg-pink-400 rounded-lg">
                      Details
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