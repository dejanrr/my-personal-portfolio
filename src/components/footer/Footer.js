import React from "react";
import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright-section">
        CopyRight © 2022 | All Rights Reserved
      </div>
      <div className="social-media-section">
        <ul>
          <li>
            <FacebookIcon />
          </li>
          <li>
            {" "}
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
