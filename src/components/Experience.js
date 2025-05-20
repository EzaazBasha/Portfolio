import React from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Projects.css'; // Reuse Projects.css for grid/card style
import experienceBanner from '../Assets/images/Experience.png'; // Make sure this image is placed correctly

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Pentagon Space Pvt Ltd",
    duration: "Jan 2025 – Jun 2025",
    description: "Worked on building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I was involved in designing and implementing RESTful APIs, developing responsive user interfaces, and integrating authentication and third-party services. The experience allowed me to collaborate in an Agile environment, actively participating in sprint planning, standups, and code reviews. I utilized Git and GitHub for version control and worked closely with UI/UX designs using Figma to ensure accurate frontend implementation. Additionally, I gained a practical understanding of network fundamentals and client-server architecture."
  }
];

function Experience() {
  return (
    <div className="home-container">
      <div style={{ marginBottom: '40px' }}>
        <img
          src={experienceBanner}
          alt="Experience Banner"
          style={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(255, 255, 0, 0.1)'
          }}
        />
      </div>

      <section className="projects-preview">
        <h3>👔 My Experience</h3>
        <p className="summary" style={{ marginBottom: '40px' }}>
          From challenges to breakthroughs — a journey through the milestones that shaped my craft.
        </p>

        <div className="projects-grid">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="projects-grid-item"
              style={{
                backgroundColor: '#000',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 6px 18px rgba(255, 255, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                color: '#f5f5f5',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 204, 0, 0.3)';
                e.currentTarget.style.backgroundColor = '#ffcc00';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 255, 0, 0.1)';
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.color = '#f5f5f5';
              }}
            >
              <h4 style={{ marginBottom: '12px' }}>{exp.role}</h4>
              <p style={{ fontWeight: '600', marginBottom: '6px' }}>{exp.company}</p>
              <p style={{ fontStyle: 'italic', marginBottom: '12px' }}>{exp.duration}</p>
              <p style={{ textAlign: 'justify' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Experience;
