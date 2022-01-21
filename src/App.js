import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import SkillsSection from "./pages/skills/SkillsSection";
import Footer from "./components/footer/Footer";
import ProjectSection from "./pages/projectSection/ProjectSection";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <SkillsSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
