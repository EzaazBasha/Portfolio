import React from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Skills.css'; // New CSS file
import skillsBanner from '../Assets/images/Skills.png';

const skillsData = {
  "Frontend": ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Design", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "ServiceNow", "REST APIs"],
  "Database": ["MongoDB", "Firebase", "SQL"],
  "Dev Tools": ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
  "Other Skills": ["Workflow Automation", "Email Notifications", "SLA Management", "Agile Methodology"]
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
          Here's a categorized breakdown of the technologies and tools I work with regularly.
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
