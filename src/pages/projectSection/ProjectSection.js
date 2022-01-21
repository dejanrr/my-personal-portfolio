import React from "react";
import Project from "../projects/Project";
import projectImage from "../../assets/project-images/imggg.png";
import "./projectSection.css";

const ProjectSection = () => {
  return (
    <div className="project-section">
      <Project
        projectName="Movie Recommend"
        projectImage={projectImage}
        projectInfo="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
      <Project
        projectName="Admin Panel"
        projectImage={projectImage}
        projectInfo="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
      <Project
        projectName="Current Weather"
        projectImage={projectImage}
        projectInfo="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
      <Project
        projectName="Chat App"
        projectImage={projectImage}
        projectInfo="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default ProjectSection;
