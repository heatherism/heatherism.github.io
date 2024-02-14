import React, {useEffect} from 'react';


const ProjectModal = ({ isOpen, onClose, project }) => {
  // useEffect(() => {
  //   const body = document.body;
  //   if (isOpen) {
  //     body.style.overflow = 'hidden';
  //     body.classList.add("blur-effect");
  //   } else {
  //     body.style.overflow = 'unset';
  //     body.classList.remove("blur-effect");
  //   }
  //   return () => {
  //     body.style.overflow = 'unset';
  //     body.classList.remove("blur-effect");
  //   };

  // }, [isOpen]);
  
  if (!isOpen) return null;

  // return (
  //   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
  //     <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full" onClick={e => e.stopPropagation()}>
  //       <h2 className="text-xl font-bold">{project.name}</h2>
  //       <img src={project.image} alt={project.name} className="w-full h-auto mt-2"/>
  //       <p className="mt-2">{project.description}</p>
  //       <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <h2 className="project-modal-header">{project.name}</h2>

        <div className="project-modal-description mb:14">
          <p>{project.description}</p>
        </div>

        <img src={project.image} alt={project.name} className="w-full h-auto mb-4" />

        <div className="project-modal-section">
          <strong>Technologies Used:</strong> {project.technologies}
        </div>
        <br />
        <div className="project-modal-section">
          <strong>Key Features:</strong> {project.features}
        </div>

        <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );  
};

export default ProjectModal;



