import React from "react";
import Img from "../image/img1.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="left-side">
        <h4>
          Hi, I'M <span>Muhammad Talha</span>
        </h4>
        <h2>React Native developer</h2>
        <p>
          A highly motivated React Native developer with a strong mobile
          application design, seeking a challenging opportunity to grow
          professionally and contribute to the success of an innovative company.
        </p>
        <div className="bnt-container">
          <a href="#contact" className="btn-default">
            Hire Me
          </a>
          <a
            className="btn-default"
            href="M_Talha_Resume.pdf"
            download="M_Talha_resume.pdf"
          >
            Get Resume
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="clip-circle">
          <img src={Img} alt="img" className="d-block w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
