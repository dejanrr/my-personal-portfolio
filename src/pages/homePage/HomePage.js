import React from "react";
import Typical from "react-typical";
import Vector from "./vector.png";
import FadeIn from "react-fade-in";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="info-box">
        <div className="info-wrapper">
          <p className="homepage-title">About me</p>

          <h1>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Hello, everyone!",
                2000,
                "I am front-end developer",
                4000,
              ]}
            />{" "}
          </h1>

          <p className="about-me">
            My name is <span className="emphasized rose-color">Dejan</span>, I'm
            a front-end developer. Fully comitted to the philosophy of life-long
            learning, I'm a developer with a deep passion for creating{" "}
            <span className="emphasized rose-color">web apps</span>.
          </p>

          <div className="button">
            <button className="btn">See more</button>
          </div>
        </div>
      </div>
      <div className="icon-box">
        <FadeIn delay={100} transitionDuration={5000}>
          <img src={Vector} width="600px" />
        </FadeIn>
      </div>
    </div>
  );
};

export default HomePage;
