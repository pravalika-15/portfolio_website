import React from "react";

const SkillsSection = () => {
  const skills = [
    "Python",
    "React.js",
    "Node.js",
    "CSS",
    "HTML",
    "JavaScript",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white rounded-md shadow-md p-4 text-center"
            >
              <span className="text-xl font-bold">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
