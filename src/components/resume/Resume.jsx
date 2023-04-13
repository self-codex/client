import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <>
      <h1 id="resume">Resume</h1>
      <div
        className=" accordion resume container-lg d-flex"
        id="accordionExample"
      >
        <div className="accordion-item left-side container-fluid">
          <div className="bullet-icons">
            <p id="programmingSkill">
              <i
                className="fas fa-laptop-code"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#programming"
                aria-expanded="true"
                aria-controls="programming"
              ></i>
            </p>

            <p id="projectOne">
              <i
                className="fas fa-chart-bar"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#project"
                aria-expanded="true"
                aria-controls="project"
              ></i>
            </p>
            {/* work experince */}
            <p id="workOne">
              <i
                className="fas fa-history"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#work"
                aria-expanded="true"
                aria-controls="work"
              ></i>
            </p>

            <p id="educationOne">
              <i
                className="fas fa-user-graduate"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#education"
                aria-expanded="true"
                aria-controls="education"
              ></i>
            </p>

            <p id="interestOne">
              <i
                className="fas fa-palette"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#interest"
                aria-expanded="true"
                aria-controls="interest"
              ></i>
            </p>
          </div>
          <div className="bullet-text">
            <div id="programmingSkill">
              <p
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#programming"
                aria-expanded="true"
                aria-controls="programming"
              >
                programming Skills
              </p>
            </div>
            {/* project */}
            <div id="projectOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#project"
                aria-expanded="false"
                aria-controls="project"
              >
                Projects
              </p>
            </div>
            {/* Work experince */}
            <div id="workOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#work"
                aria-expanded="false"
                aria-controls="work"
              >
                work History
              </p>
            </div>

            <div id="educationOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#education"
                aria-expanded="false"
                aria-controls="education"
              >
                Educations
              </p>
            </div>

            <div id="interestOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#interest"
                aria-expanded="false"
                aria-controls="interest"
              >
                interests
              </p>
            </div>
          </div>
        </div>
        <div className="right-side accordion-item">
          {/* programming  */}
          <div
            id="programming"
            className="accordion-collapse skills collapse show fade"
            aria-labelledby="programmingSkill"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>HTML & CSS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      65%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>JAVASCRIPT
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      55%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>REACT & REACT NATIVE
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>REDUX
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>NODEJS & EXPRESSJS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>MONGODB
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>REST API
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      55%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>FIREBASE
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      55%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* project  */}
          <div
            id="project"
            className="accordion-collapse project collapse fade"
            aria-labelledby="projectOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Cab Booking App
                  </p>
                  <p className="deg">
                    Technologies Used: React Native Redux,Firebase
                  </p>
                  <p className="des">
                    Designing a Cab Booking app using React Native requires a
                    simple, clean, and intuitive interface that is visually
                    appealing and easy to use.
                  </p>
                </div>
                <a
                  href="https://github.com/self-codex/CabAppProject"
                  className="year"
                  target="_blank"
                >
                  Open Repo
                </a>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Chat App
                  </p>
                  <p className="deg">
                    Technologies Used:React Native, Firestore, Firebase
                    Authentication
                  </p>
                  <p className="des">
                    Designing a Real-time messaging: The chat app should allow
                    users to send and receive messages in real-time, with
                    minimal latency.
                  </p>
                </div>
                <a
                  href="https://github.com/self-codex/chatApp"
                  className="year"
                  target="_blank"
                >
                  Open Repo
                </a>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Video Call App
                  </p>
                  <p className="deg">
                    Technologies Used:React Native, Firebase Authentication
                  </p>
                  <p className="des">
                    There are many third-party APIs available that provide video
                    calling functionality, Agora APIs offer SDKs for React
                    Native and can be integrated into your app to enable video
                    calling.
                  </p>
                </div>
                <a
                  href="https://github.com/self-codex/videoCallApp"
                  className="year"
                  target="_blank"
                >
                  Open Repo
                </a>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>QR Code Scanner
                  </p>
                  <p className="deg">Technologies Used: React Native</p>
                  <p className="des">
                    Designing A QR code scanner app is all about scanning codes.
                    The app focus on the scanning process.
                  </p>
                </div>
                <a
                  href="https://github.com/self-codex/qrcodeScanner"
                  className="year"
                  target="_blank"
                >
                  Open Repo
                </a>
              </div>
            </div>
          </div>
          {/* work experience  */}
          <div
            id="work"
            className="accordion-collapse collapse work fade"
            aria-labelledby="workOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <div className="edu">
                  <div className="institute">
                    <p className="uni">
                      <i className="fas fa-circle"></i>PNY Trainings, Arfa IT
                      Tower
                    </p>
                    <p className="deg">Mern Stack Instructor</p>
                  </div>
                  <div className="year">Present</div>
                </div>
                <div className="works">
                  <p className="des">
                    As a Mern Stack Instructor, I play a crucial role in helping
                    students learn and develop their Mern skills. By providing
                    expert instruction and guidance, i can help students become
                    confident and proficient Mern developers.
                  </p>
                </div>
              </div>
              {/** */}
              <div className="workExp">
                <div className="edu">
                  <div className="institute">
                    <p className="uni">
                      <i className="fas fa-circle"></i>MCIT Software Lahore, PK
                    </p>
                    <p className="deg">React Native Developer</p>
                  </div>
                  <div className="year">2022</div>
                </div>
                <div className="works">
                  <p className="des">
                    Developing and maintaining Mobile & Web applications for and
                    back end using node and integrating with various APIs
                    technologies Redux for state management or Firebase for data
                    storage.
                  </p>
                </div>
              </div>
              <div className="workExp">
                <div className="edu">
                  <div className="institute">
                    <p className="uni">
                      <i className="fas fa-circle"></i>wGroup Tech
                    </p>
                    <p className="deg">React Intern</p>
                  </div>
                  <div className="year">2022</div>
                </div>
                <div className="works">
                  <p className="des">
                    As a React intern, you will have the opportunity to gain
                    practical experience in mobile app development and learn
                    from experienced developers
                  </p>
                </div>
              </div>
              {/** */}
            </div>
          </div>

          <div
            id="education"
            className="accordion-collapse educations collapse fade"
            aria-labelledby="educationOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Superior University, Lahore
                    Pk
                  </p>
                  <p className="deg">(MCS) Master of Computer Science</p>
                </div>
                <div className="year">2019-2021</div>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Superior College, Lahore Pk
                  </p>
                  <p className="deg">(BCS) Bacholor of Computer Science</p>
                </div>
                <div className="year">2017-2019</div>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Superior College, Daska Pk
                  </p>
                  <p className="deg">(ICS) Intermediate of Computer Science</p>
                </div>
                <div className="year">2015-2017</div>
              </div>
            </div>
          </div>

          <div
            id="interest"
            className="accordion-collapse interest collapse fade"
            aria-labelledby="interestOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div>
                  <p className="uni">
                    <i className="fas fa-circle"></i>Teaching
                  </p>
                  <p className="des">
                    Apart from being a tech enthusiast and a code writer, i also
                    love to teach people what i know simply because i believe in
                    sharing.
                  </p>
                </div>
              </div>
              <div className="edu">
                <div>
                  <p className="uni">
                    <i className="fas fa-circle"></i>Music
                  </p>
                  <p className="des">
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </p>
                </div>
              </div>
              <div className="edu">
                <div>
                  <p className="uni">
                    <i className="fas fa-circle"></i>Competitive Gaming
                  </p>
                  <p className="des">
                    I like to challenge my reflexes a lot while competing in
                    football games, pushing the rank and having interactive
                    gaming sessions excites me the most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
