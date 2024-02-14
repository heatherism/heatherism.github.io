// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-6">Feel free to reach out to discuss opportunities, collaborations, or just to say hi!</p>
        <div>
          <a href="mailto:heatherism91@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2">Email Me</a>
          <a href="http://www.linkedin.com/in/tonghong91/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2">LinkedIn</a>
          {/* Add other contact links as necessary */}
        </div>
      </div>
    </section>
  );
};
//I'm currently available for freelance work or full-time positions. 

export default Contact;
