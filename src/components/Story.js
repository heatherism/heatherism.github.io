import React from 'react';
import profilePhoto from '../assets/profilephoto.jpeg';

const Story = () => {
  return (
    <section id="story" className="bg-blue-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="story-frame shadow-lg border border-gray-200 rounded-lg overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center">
          {/* Profile Photo */}
          <img src={profilePhoto} alt="Your Name" className="shadow-box-frame rounded-full w-48 h-48 object-cover mb-4 md:mb-0 md:mr-8" />
          
          {/* Story Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 glittering-text">My Journey</h2>
            <p className="text-xl text-gray-600">
              For years, my professional world revolved around education, managing learning management systems, and becoming the bridge between knowledge and its seekers. Yet, it was the underlying technology that truly captivated me.
            </p>
            <p className="text-xl text-gray-600 mt-4">
              As a lifelong gamer, I've always been enchanted by virtual worlds and intrigued by how technology can streamline education, life, and play. Participating in <em>Diablo 4</em> Open Beta was a turning point. Witnessing the dedication of the gaming community, the swift establishment of resources and trading platforms by passionate gamers, I realized the empowering potential of technology.
            </p>
            <p className="text-xl text-gray-600 mt-4">
              This journey from education to tech is a testament to the transformative power of passion and community. As I continue to explore this digital frontier, my goal is to not just be a participant but a creator, using technology to enhance and inspire the worlds of education, play, and beyond. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
