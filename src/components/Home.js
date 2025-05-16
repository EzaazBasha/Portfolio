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
            🚀 Aspiring Software Engineer | 🏅 ServiceNow Developer | 💻 Web Development Enthusiast & ITSM Practitioner
          </h2>
          <p className="summary">
            Passionate about creating efficient, user-centered applications using MERN full-stack and ServiceNow expertise.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link to="/projects" className="btn">View Projects</Link>
            <a href="/Ezaaz_Resume.pdf" download className="btn">Download Resume</a>
            <Link to="https://www.linkedin.com/in/ezaazbasha/" className="btn">Get in Touch</Link>
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
          Full-stack developer with hands-on experience in frontend and backend technologies, along with expertise in the ServiceNow platform. Dedicated to building scalable, user-centric solutions that drive operational efficiency and enhance user experience
        </p>
      </div>

      {/* Internship Section */}
      <div className="internship">
        <h3>💼 Internship Experience</h3>
        <ul>
          <li>
            <strong>MERN Stack Intern @ Pentagon Space</strong> (Jan 2025 – June 2025) <br />
            Contributing to the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js. 
      Hands-on experience in building RESTful APIs, integrating front-end and back-end services, and creating responsive, user-friendly interfaces.
          </li>
        </ul>
      </div>

      {/* Projects Preview */}
      <div className="projects-preview">
        <h3>📁 Key Projects</h3>
        <ul>
          <li>
            <Link to="/projects/Smart Park-A Real Time Parking Application">
              Smart Park-A Real Time Parking Application (MERN Stack)
            </Link>
          </li>
          <li><Link to="/projects/BuildTrack">BuildTrack (ServiceNow)</Link></li>
          <li><Link to="/projects/movie-rating">Movie Rating Portal (React.js)</Link></li>
        </ul>
        <Link to="/projects" className="view-all">🔗 View All Projects</Link>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>🔧 Skills Snapshot</h3>
        <ul className="skills-grid">
          <li>Languages: C, Core-Java, Python</li>
          <li>Web: HTML, CSS, JavaScript, React.js</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Tools: ServiceNow, Figma, Git/Github</li>
          <li>Other: Data Structures, ITSM, Networks </li>
          <li>Frameworks: Node.js, Express.js</li>
          <li>ServiceNow: ServiceNow Scripting, Flow Designer, UI Customization, ServiceNow Catalog Development</li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="certifications">
        <h3>🏆 Certifications</h3>
        <ul>
          <li>🏅 ServiceNow Certified Administrator</li>
          <li>🏅 ServiceNow Certified Application Developer</li>
          <li>📜 21st Century Core Employability Skills – APSSDC</li>
          <li>📜 Data Analytics (Accenture), IoT (NPTEL), Python Essentials, Data Science (Cisco)</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h3>💡 Soft Skills</h3>
        <ul>
          <li>🗣 Communication</li>
          <li>🔄 Adaptability</li>
          <li>⏰ Time Management</li>
          <li>📚 Organized</li>
        </ul>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
