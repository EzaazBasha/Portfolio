import React from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Skills.css'; // New CSS file
import skillsBanner from '../Assets/images/Skills.png';

const skillsData = {
  "💻 Languages": ["C Programming","Java(Core)","Python","JavaScript"],
  "🌐 Web Technologies": ["HTML", "CSS", "JavaScript","React js"],
  "🗄️ Database": ["MongoDB","SQL"],
  "⚙️ Dev Tools": ["Git", "GitHub","VS Code","Canva","Figma"],
  "🏗️ Frame Works": ["Node.js","Express.js"],
  "🛠️ ServiceNow": ["Core ServiceNow Skills", "Development Skills", "Customization & UI/UX", "Security & Access Control", "Other Platform Capabilities"],
  "🧩 Other Skills": ["Object-orirnted Programming", "Data Structures", "Agile Methodology", "API Management and Integration"],
  "🧠 Soft Skills":["Time Management","Good Commumication","Team Person","Adaptability"]
};

function Skills() {
  return (
    <div className="home-container">
    <div style={{ marginBottom: '40px' }}>
        <img
          src={skillsBanner}
          alt="Skills Banner"
          style={{
            width: '100%',
            backgroundColor:'#040400',
            maxHeight: '300px',
            objectFit: 'contain',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(255, 255, 0, 0.1)'
          }}
        />
      </div>

      <section className="projects-preview">
        <h3>💡 My Technical Skills</h3>
        <p className="summary skills-summary">
          Here’s a glimpse into the tools and talents that turn ideas into impact.
        </p>

        <div className="skills-cards-container">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div
              key={index}
              className="projects-grid-item skills-card"
            >
              <h4>{category}</h4>
              <ul>
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Skills;
