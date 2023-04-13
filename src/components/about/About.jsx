import React from "react";
import Img from "../../image/img.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <h1 id="about">About Me</h1>
      <div className="about container-fluid">
        <div className="container-lg">
          <div className="left-side">
            <img src={Img} alt="my img" className="d-block" />
          </div>
          <div className="right-side">
            <p className="about-detail">
              A highly motivated React Native developer with a strong mobile
              application design, seeking a challenging opportunity to grow
              professionally and contribute to the success of an innovative
              company.
            </p>
            <h5>Here are a Few Highlights:</h5>

            <p>
              <i className="fas fa-circle"></i>
              Full Stack React Native Developer
            </p>
            <p>
              <i className="fas fa-circle"></i>
              Familiarity with RESTful APIs
            </p>
            <p>
              <i className="fas fa-circle"></i>
              Strong knowledge of JavaScript, React Native, Nodejs,
              Expressjs,MongoDB and related technologies
            </p>
            <p>
              <i className="fas fa-circle"></i>
              Knowledge of Redux state management, technologies
            </p>
            <p>
              <i className="fas fa-circle"></i>
              Knowledge of Firebase Database,Firestore,Authentication,Cloud
              Messaging,Cloud Storage
            </p>
            <p>
              <i className="fas fa-circle"></i>
              Managing Database
            </p>
            <div className="btn-continer mt-4">
              <button href="#contact" className="btn-default hire-btn">
                Hire
              </button>
              <a
                className="btn-default res-btn "
                href="Talha_FullStack_Resume .pdf"
                download="Talha_FullStack_Resume .pdf"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
