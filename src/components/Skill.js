// Skill.js
const Skill = ({ name, level }) => {
  const barStyle = {
    width: `${level}%`, // Use the level prop to dynamically set the width
  };

  return (
    <div className="mb-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="bg-gray-200 h-4 rounded">
        <div className="bg-blue-500 h-4 rounded" style={barStyle}></div>
      </div>
    </div>
  );
};


export default Skill