import React from 'react';
// Example skill image
// import skillImage from '../assets/skill-image.jpg';

function Skills() {
  return (
    <section className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="skill">
        {/* <img src={skillImage} alt="Skill" className="w-20 h-20 mx-auto" /> */}
        <p className="text-center">Skill Name</p>
      </div>
      {/* Repeat for other skills */}
    </section>
  );
}

export default Skills;
