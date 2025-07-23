import React from "react";
import projectData from "./projectData.jsx"; // your array lives here
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  
  return (
    <section className="relative flex min-h-[100vh] w-full max-w-[100vw] flex-col items-center overflow-hidden p-6 py-5">
      <h3 className="text-6xl font-medium max-lg:text-3xl">Projects</h3>
      <div className="my-4 h-[1px] w-[80%] bg-black" />

      <p className="max-w-2xl text-center text-gray-700 mb-8 text-lg">
        Here's a selection of projects I've built across accessibility, education, and machine learning. Each one reflects my interest in building tools that solve real-world problems with clean architecture and thoughtful design.
      </p>

      <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
