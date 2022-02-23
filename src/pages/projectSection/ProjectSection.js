import React from "react";
import Project from "../projects/Project";
import adminPanel from "../../assets/project-images/adminPanel.png";
import todoApp from "../../assets/project-images/todoApp.png";
import movieDiscovery from "../../assets/project-images/movieDiscovery.png";
import weatherApp from "../../assets/project-images/weatherApp.png";
import "./projectSection.css";

const ProjectSection = ({ projectsRef }) => {
  return (
    <div className="project-section" ref={projectsRef}>
      <Project
        projectName="To-Do App"
        projectImage={todoApp}
        alt="To-Do app image"
        projectInfo="The classic To-Do application which allows user to write down all the things he wants to accomplish. User can delete or toggle tasks, once they are finished."
        sourceCodeLink="https://github.com/dejanrr/todo-app"
        livePreviewLink="https://zealous-mahavira-c33b8e.netlify.app"
      />
      <Project
        projectName="Admin Panel"
        projectImage={adminPanel}
        alt="Admin Panel image"
        projectInfo="It is a fully responsive administration template. It provides you with a collection of ready to use code snippets and utilities, custom pages, a collection of applications and some useful widgets."
        sourceCodeLink="https://github.com/dejanrr/admin-panel-template"
        livePreviewLink="https://blissful-gates-cd3335.netlify.app/"
      />
      <Project
        projectName="Current Weather"
        projectImage={weatherApp}
        alt="Current Weather app image"
        projectInfo="This is a simple weather app, which uses WeatherAPI to fetch places, cities, countries etc... The application shows you the current weather for that location and the forecast for the next 3 days."
        sourceCodeLink="https://github.com/dejanrr/weather-app"
        livePreviewLink="https://heuristic-perlman-b57d7f.netlify.app/"
      />
      <Project
        projectName="Movie Discovery"
        projectImage={movieDiscovery}
        alt="Movie Discovery app image"
        projectInfo="Movie Discovery is a free web app for movie recommendations.
        Take a look at the current list of the top rated or the most
        popular movies and choose the right one for you."
        sourceCodeLink="https://github.com/dejanrr/movies-app"
        livePreviewLink="https://epic-payne-e8d9e2.netlify.app/"
      />
    </div>
  );
};

export default ProjectSection;
