import React from "react";
import "./project.css";

const Project = ({ projectImage, projectName, projectInfo }) => {
  return (
    <div className="project-container">
      <div className="project-info">
        <div className="project-wrapper">
          <div className="project-name section-title">{projectName}</div>
          <div className="project-info-text">{projectInfo}</div>
          <div className="project-buttons">
            <button className="btn button">Source Code</button>
            <button className="btn button">Live Demo</button>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={projectImage} width="400px" />
      </div>
    </div>
  );
};

export default Project;
