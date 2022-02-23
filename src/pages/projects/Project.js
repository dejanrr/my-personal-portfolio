import React from "react";
import "./project.css";

const Project = ({
  projectImage,
  projectName,
  projectInfo,
  sourceCodeLink,
  livePreviewLink,
}) => {
  return (
    <div className="project-container">
      <div className="project-info">
        <div className="project-wrapper">
          <div className="project-name section-title">{projectName}</div>
          <div className="project-info-text">{projectInfo}</div>
          <div className="project-buttons">
            <button className="btn button">
              <a href={sourceCodeLink}>Source Code</a>
            </button>
            <button className="btn button">
              <a href={livePreviewLink}>Live Demo</a>
            </button>
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
