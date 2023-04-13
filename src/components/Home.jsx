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
        <h2>Full Stack React Native developer</h2>
        <p>
          As a MERN stack developer, I have the skills to work with Mobile
          applications ' front-end and back-end. I can build dynamic user
          interfaces using React on the front end, and work with Node.js and
          Express to develop the serverside logic for your application. I can
          also work with MongoDB to create and manage the database for your
          application.
        </p>
        <div className="bnt-container">
          <a href="#contact" className="btn-default">
            Hire Me
          </a>
          <a
            className="btn-default"
            href="Talha_FullStack_Resume .pdf"
            download="Talha_FullStack_Resume .pdf"
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

// A highly motivated React Native developer with a strong mobile
// application design, seeking a challenging opportunity to grow
// professionally and contribute to the success of an innovative company.

export default Home;
