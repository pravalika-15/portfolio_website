import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin semper risus, sit amet egestas magna tincidunt sit amet.",
    image:
      "https://cdn.pixabay.com/photo/2017/12/29/14/14/set-3047723_1280.jpg",
    url: "https://project1-url.com",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin semper risus, sit amet egestas magna tincidunt sit amet.",
    image:
      "https://cdn.pixabay.com/photo/2017/12/29/14/14/set-3047723_1280.jpg",
    url: "https://project2-url.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-6">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md max-h-40 lg:max-h-30 object-cover"
                />
              </a>
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-lg block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
