import React from "react";
import "./navbar.css";

//#1F2235 bg color

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">D / <span className="rose-color">DEV</span> </span>
      <nav>
        <ul className="nav-list">
          <li>Skills</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
