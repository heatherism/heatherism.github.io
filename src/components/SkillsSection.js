// SkillsSection.js
import Skill from './Skill';

const skillsData = [
  { name: 'Java', level: 90 },
  { name: 'Go', level: 80 },
  { name: 'Kotlin', level: 60 },
  { name: 'HTML/CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 80 },
  { name: 'Spring Boot', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Docker', level: 80 },

  { name: 'PostgreSQL', level: 85 },

  // Add more skills as needed
];

const SkillsSection = () => {
  return (
    <div className="story-frame shadow-lg border border-gray-200 rounded-lg overflow-hidden">
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
    </div>
  );
};

export default SkillsSection;
