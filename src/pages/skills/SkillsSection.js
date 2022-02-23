import React from "react";
import "./skillsSection.css";

const SkillsSection = ({ skillsRef }) => {
  return (
    <div className="skills-section" ref={skillsRef}>
      <div className="text-box">
        <p className="section-title">
          My <span className="rose-color">skills</span>
        </p>
        <p className="skills-text">
          My main goal is to write modern, performant, maintainable{" "}
          <span className="emphasized rose-color">code</span> for a diverse
          array of client and internal projects. Here are a few{" "}
          <span className="emphasized rose-color">technologies</span> I've been
          working with recently:
        </p>
      </div>
      <div className="technologies-box">
        <div className="column1">
          <div className="shape primary-color">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width="50px"
            />
          </div>

          <div className="shape">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              width="50px"
            />
          </div>
        </div>

        <div className="column2">
          <div className="shape primary-color">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              width="50px"
            />
          </div>
          <div className="shape">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              width="50px"
            />
          </div>
          <div className="shape primary-color">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              width="50px"
            />
          </div>

          <div className="shape">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              width="50px"
            />
          </div>
        </div>

        <div className="column3">
          <div className="shape primary-color">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              width="50px"
            />
          </div>

          <div className="shape">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              width="50px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
