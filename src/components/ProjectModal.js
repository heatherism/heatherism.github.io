import React from 'react';


const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold">{project.name}</h2>
        <img src={project.image} alt={project.name} className="w-full h-auto mt-2"/>
        <p className="mt-2">{project.description}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;



