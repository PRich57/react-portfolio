import React from "react";
import Project from "../components/Project";
import { projectData } from "../utils/projectData";
import useMousePosition from "../utils/mousePosition";
import "../styles/components/Portfolio.css";

// Functional component responsible for rendering project cards
function Projects() {

  return (
    <>
      <div className="projects">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
      <p id="projects">Here are some of my recent projects!</p>
      <h2>Projects</h2>
      {/* <h3>{JSON.stringify(mousePosition)}</h3> */}
    </>
  );
}

export default Projects;
