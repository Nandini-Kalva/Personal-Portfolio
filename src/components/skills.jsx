import React from "react";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Responsive Design"
];

const tools = [
  "Git",
  "GitHub",
  "VS Code"
];

const concepts = [
  "Responsive Design",
  "Flexbox",
  "UI/UX"
];

const Skills = () => {
  return (
    <section className="px-6 py-12  h-screen scroll-mt-20" id="Skills">
      <h1 className="text-4xl text-center mb-12">Skills</h1>

      {/* Frontend */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4 text-center font-semibold">
          Frontend Development
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg font-semibold text-gray-700">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4 text-center font-semibold">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg font-semibold text-gray-700">{tool}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Concepts */}
      <div>
        <h2 className="text-2xl mb-4 text-center font-semibold">
          Concepts
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg font-semibold text-gray-700">{concept}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;