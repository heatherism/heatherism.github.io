// ResumeModal.js
import React from 'react';
import resumePDF from '../assets/Resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
    console.log('ResumeModal isOpen:', isOpen);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl w-full" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold">My Resume</h2>
        {/* Example using an iframe to display a PDF resume */}
        <iframe src={resumePDF} title="Resume" className="w-full h-screen"></iframe>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
