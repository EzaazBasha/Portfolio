import React, { useEffect, useRef } from 'react';
import Footer from './Footer';
import '../Styles/Home.css';
import '../Styles/Projects.css';
import projectsBanner from '../Assets/images/projects.png';
import { useLocation, useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Smart Park-A Real Time Parking Application",
    description:
      "Developed a web-based parking management system utilizing the MERN stack (React.js, Node.js, Express.js, MongoDB) to deliver a highly efficient and scalable solution for real-time parking slot management. The system features dynamic updates of parking availability, allowing users to view and reserve slots instantly while preventing double bookings through robust backend logic. Integrated a secure payment gateway to facilitate seamless, encrypted transactions supporting multiple payment methods, ensuring user trust and smooth checkout experiences. Designed a clean, responsive user interface focused on ease of use, complemented by automated booking confirmations and reminder notifications via email and push alerts, significantly enhancing user engagement and satisfaction. This project demonstrates expertise in full-stack development, API design, state management, asynchronous data handling, and secure authentication protocols within a real-world application context.\nSkills: Reactjs, Mongo DB, Nodejs, Expressjs ",
    link: "https://github.com/EzaazBasha/CSE-2021-25-Batch-A1",
    liveLink: "https://carparkingproject.vercel.app/"
  },
  {
    title: "BuildTrack – ServiceNow Custom Application",
    description:
      "Designed and developed a custom ServiceNow application to automate the end-to-end order processing workflow for AI-powered construction devices, replacing manual spreadsheet-based processes with a streamlined, error-free system. The solution includes automated approvals, real-time inventory tracking, and dispatch management, significantly improving operational accuracy and speed. Built intuitive dashboards and reporting tools to provide real-time visibility into order statuses, inventory levels, and approval workflows, enabling better decision-making and accountability. Integrated REST APIs to support seamless data exchange with external systems and implemented automated email notifications to enhance inter-team communication and coordination.\nSkills: ServiceNow, REST APIs, Email Notifications, Workflow Automation, Reporting & Dashboards.",
    link: "https://gitlab.com/custom_app1531509/BuildTrack",
    liveLink: ""
  },
  {
    title: "Movie Rating Portal (IMdb-Clone)",
    description:
      "Engineered a fully functional IMDb clone using React.js, offering a seamless and responsive platform for users to browse, search, and explore movies with real-time content rendering. Implemented modern web design principles and interactive UI components to enhance the overall user experience, particularly for movie enthusiasts seeking smooth navigation and quick access to information. Leveraged core technologies including HTML, CSS, JavaScript, and React.js, with external APIs integrated to dynamically fetch and display movie details, ratings, posters, and metadata. This project highlights strong capabilities in frontend development, API consumption, and building user-focused web applications with clean, scalable architecture.\nSkills: React.js, JavaScript, HTML, CSS, REST APIs.",
    link: "https://github.com/EzaazBasha/movie-rating-portal",
    liveLink: "https://ezaazbasha.github.io/Movie-Rating-Portal/"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio website to showcase projects, skills, and achievements with a focus on clean design, smooth interaction, and modern web standards. Built using React.js, the website features a dynamic card-based layout for the “About” section, allowing users to explore Education, Certifications, and Extracurricular Activities through interactive components. Integrated smooth navigation, section-based scrolling, and responsive design principles to ensure a consistent user experience across devices. Each project is displayed with detailed descriptions, technologies used, and links to GitHub repositories, making it easy for viewers to assess both technical depth and design clarity. The portfolio serves as a central platform for presenting professional work and personal growth as a developer.\nSkills: React.js, JavaScript, HTML, CSS, Responsive Design, UI/UX Design, Component-Based Architecture.",
    link: "https://github.com/EzaazBasha/portfolio",
    liveLink: ""
  },
  {
    title: "Incident Management Customization ",
    description:
      "  Designed and implemented a customized incident management workflow in ServiceNow to automate ticket assignment based on priority and location, significantly improving response and resolution times. Integrated SLA management to monitor and enforce service-level compliance, with automated notifications alerting users and support teams about potential SLA breaches in real time. Enhanced the incident handling process by leveraging client and server scripts to streamline form behavior, enforce dynamic validations, and improve overall user interaction. This customization initiative enhanced operational efficiency, reduced manual errors, and supported proactive incident resolution across teams.\nSkills: ServiceNow Flow Designer, Client Scripts, Server Scripts, Notifications, SLA Management, Workflow Automation.",
    link: "",
    liveLink: ""
  }
];

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const projectRefs = useRef([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const highlight = params.get('highlight');

    if (highlight && projectRefs.current.length > 0) {
      const index = projects.findIndex(
        (proj) => proj.title.toLowerCase() === highlight.toLowerCase()
      );

      if (index !== -1 && projectRefs.current[index]) {
        const card = projectRefs.current[index];
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('highlight-card');

        const timeout = setTimeout(() => {
          card.classList.remove('highlight-card');
        }, 3000);

        return () => clearTimeout(timeout);
      }
    }
  }, [location.search]);

  const handleUnavailableRedirect = (e) => {
    e.preventDefault();
    navigate('/live-unavailable');
  };

  return (
    <div className="home-container">
      <div style={{ marginBottom: '40px' }}>
        <img
          src={projectsBanner}
          alt="Projects Banner"
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
        <h3>🚀 Welcome to My Projects</h3>
        <p className="summary" style={{ marginBottom: '40px' }}>
          Each project here is a milestone in my journey as a developer — built with passion, learning, and curiosity.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (projectRefs.current[i] = el)}
              className="projects-grid-item"
              style={{
                backgroundColor: '#000',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 6px 18px rgba(255, 255, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
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
              <h4 style={{ marginBottom: '12px' }}>{project.title}</h4>
              <p style={{ marginBottom: '12px', textAlign: 'justify' }}>
                {project.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div>
                <a
                  href={project.link && project.link.trim() !== "" ? project.link : "/live-unavailable"}
                  target={project.link && project.link.trim() !== "" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project on GitHub`}
                  style={{
                    color: '#ffcc00',
                    fontWeight: '600',
                    textDecoration: 'underline',
                    marginRight: '20px',
                    transition: 'color 0.3s ease'
                  }}
                  onClick={(e) => {
                    if (!project.link || project.link.trim() === "") {
                      handleUnavailableRedirect(e);
                    }
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffcc00')}
                >
                  View Project
                </a>
                <a
                  href={project.liveLink && project.liveLink.trim() !== "" ? project.liveLink : "/live-unavailable"}
                  target={project.liveLink && project.liveLink.trim() !== "" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  style={{
                    color: '#ffcc00',
                    fontWeight: '600',
                    textDecoration: 'underline',
                    transition: 'color 0.3s ease'
                  }}
                  onClick={(e) => {
                    if (!project.liveLink || project.liveLink.trim() === "") {
                      handleUnavailableRedirect(e);
                    }
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffcc00')}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;
