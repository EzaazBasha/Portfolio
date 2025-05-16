import React from 'react';
import Footer from './Footer';
import '../Styles/Home.css';

const projects = [
  {
    title: "Movie Rating Portal",
    description: "An IMDb clone built using React.js and APIs. Users can search, view ratings, and get movie details with a sleek UI.",
    link: "https://github.com/EzaazBasha/movie-rating-portal"
  },
  {
    title: "Placement Management System",
    description: "Built using PHP and MySQL, this system helps college staff manage student placements and company details efficiently.",
    link: "https://github.com/EzaazBasha/placement-management"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio made with React and hosted on GitHub Pages to showcase skills and projects.",
    link: "https://github.com/EzaazBasha/portfolio"
  }
];

function ProjectsPage() {
  return (
    <div className="home-container">
      <section className="projects-preview">
        <h3>🚀 Welcome to My Projects</h3>
        <p className="summary" style={{ marginBottom: '40px' }}>
          Each project here is a milestone in my journey as a developer — built with passion, learning, and curiosity.
        </p>

        <div className="skills-grid">
          {projects.map((project, index) => (
            <div key={index} className="skills-grid-item" style={{ backgroundColor: '#000', padding: '20px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(255, 255, 0, 0.1)' }}>
              <h4 style={{ color: '#ffcc00', marginBottom: '12px' }}>{project.title}</h4>
              <p style={{ color: '#f5f5f5', marginBottom: '12px' }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#ffcc00', fontWeight: '600', textDecoration: 'underline' }}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectsPage;
