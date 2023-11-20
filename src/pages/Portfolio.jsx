import React from "react";
import Project from "../components/Project";
import { projectData } from "../utils/projectData";
import useMousePosition from "../utils/mousePosition";
import "../styles/components/Portfolio.css";

function Projects() {

  const mousePosition = useMousePosition();

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
      <h2 id="projects">Projects</h2>
      {/* <h3>{JSON.stringify(mousePosition)}</h3> */}
    </>
  );
}

export default Projects;
