import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import SkillsSection from "./pages/skills/SkillsSection";
import Footer from "./components/footer/Footer";
import ProjectSection from "./pages/projectSection/ProjectSection";

const App = () => {
  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const homeRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        scrollToHome={scrollToHome}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <HomePage homeRef={homeRef} scrollToSkills={scrollToSkills} />
      <SkillsSection skillsRef={skillsRef} />
      <ProjectSection projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
