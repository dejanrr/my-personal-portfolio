import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({
  scrollToHome,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <div className="logo" onClick={scrollToHome}>
        D / <span className="rose-color">Dev</span>{" "}
      </div>
      <nav>
        <ul className="nav-list">
          <li onClick={scrollToHome}>Home</li>
          <li onClick={scrollToSkills}>Skills</li>
          <li onClick={scrollToProjects}>Projects</li>
          <li onClick={scrollToContact}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
