import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Footer from "./Footer";
import profileImg from "../Assets/images/profile.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1 className="name">Urichintala Ezaaz Basha</h1>
          <h2 className="role">
            🚀 Aspiring Software Engineer | 🏅 ServiceNow Developer | 💻 Web
            Development Enthusiast & ITSM Practitioner
          </h2>
          <p className="summary">
            Passionate about creating efficient, user-centered applications
            using MERN full-stack and ServiceNow expertise.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <a href="/Ezaaz_Resume.pdf" download className="btn">
              Download Resume
            </a>
            <Link to="https://www.linkedin.com/in/ezaazbasha/" className="btn">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <img src={profileImg} alt="profile" />
        </div>
      </div>

      {/* Introduction */}
      <div className="introduction">
        <p>
          Full-stack developer with hands-on experience in frontend and backend
          technologies, along with expertise in the ServiceNow platform.
          Dedicated to building scalable, user-centric solutions that drive
          operational efficiency and enhance user experience
        </p>
      </div>

      {/* Internship Section */}
      <Link
        to="/experience"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="internship">
          <h3>Internship Experience</h3>
          <ul>
            <li>
              <strong>MERN Stack Intern @ Pentagon Space</strong> (Jan 2025 –
              June 2025) <br />
              Contributing to the development of full-stack web applications
              using MongoDB, Express.js, React.js, and Node.js. Hands-on
              experience in building RESTful APIs, integrating front-end and
              back-end services, and creating responsive, user-friendly
              interfaces.
            </li>
          </ul>
        </div>
      </Link>

      {/* Projects Preview */}
      <div className="projects-preview home-preview">
        <h3>Key Projects</h3>
        <ul>
          <li>
            <Link
              to="/projects"
              state={{ highlight: "smartpark" }}
            >
              🚗 Smart Park-A Real Time Parking Application (MERN Stack)
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              state={{ highlight: "buildtrack" }}
            >
              🛠️ BuildTrack (ServiceNow)
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              state={{ highlight: "movierating" }}
            >
              🎬 Movie Rating Portal (React.js)
            </Link>
          </li>
        </ul>
        <Link to="/projects" className="view-all">
          🔗 View All Projects
        </Link>
      </div>

      {/* Skills Section */}
      <Link
        to="/skills"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="skills-section">
          <h3> Skills Snapshot</h3>
          <ul className="skills-grid">
            <li>
              <div className="skill-item">
                <span className="skill-emoji">💻</span>
                <span className="skill-text">Languages</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🌐</span>
                <span className="skill-text">Web Technologies</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🗄️</span>
                <span className="skill-text">Database</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">⚙️</span>
                <span className="skill-text">Tools</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🛠️</span>
                <span className="skill-text">ServiceNow</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🏗️</span>
                <span className="skill-text">Frameworks</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🧩</span>
                <span className="skill-text">Others</span>
              </div>
            </li>
          </ul>
        </div>
      </Link>

      {/* About Me */}
      <Link
        to="/about"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="aboutme">
          <h3> About Me</h3>
          <ul>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🎓</span>
                <span className="skill-text">Education</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">📜</span>
                <span className="skill-text">Certifications</span>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <span className="skill-emoji">🏅</span>
                <span className="skill-text">Extra Ciricular Activities</span>
              </div>
            </li>
          </ul>
        </div>
      </Link>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
