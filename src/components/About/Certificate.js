import React from "react";
import Footer from "../Footer";
import "../../Styles/Home.css";
import "../../Styles/About.css"; // for .about-card styles
import "../../Styles/Projects.css"; // for project-link styles (view certificate)
import certificateBanner from "../../Assets/images/Certificate.png";

const certificates = [
  {
    title: "Certified ServiceNow Administrator",
    issuer: "ServiceNow",
    date: "Oct 2024",
    link: "https://drive.google.com/file/d/1uhlV2gKGkbrJphPIfNWRGTd9agMntmfj/view?usp=drive_link",
  },
  {
    title: "Certified Application Developr",
    issuer: "ServiceNow",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1lgLsk9s9ovGYsT6Mrx3KEyoeh8JZUGpi/view?usp=drive_link",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Python Institute",
    date: "Aug 2023",
    link: "https://drive.google.com/file/d/1YSHir05-ZVRdADcWxv9JSQdwrgm6H5n3/view?usp=drive_link",
  },
  {
    title: "21st Century Employability Skills Program",
    issuer: "Wadwani Foundation",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/1YSHir05-ZVRdADcWxv9JSQdwrgm6H5n3/view?usp=drive_link",
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    date: "Jan 2024 - Apr 2024",
    link: "https://drive.google.com/file/d/13r1npDDFLqnkQkm6lWkl-Kr8v4rJiYnv/view?usp=drive_link",
  },
  {
    title: "Data Analytics and Visualization JobSimulation",
    issuer: "Accenture",
    date: "Jul 2024 ",
    link: "https://drive.google.com/file/d/1AlkTyfx03jzbRom1yqCaseeNHFmEWZjy/view?usp=drive_link",
  },
];

const Certificate = () => {
  return (
    <div className="home-container">
      <div style={{ marginBottom: "40px" }}>
        <img
          src={certificateBanner}
          alt="Certificates Banner"
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(255, 255, 0, 0.1)",
          }}
        />
      </div>

      <section className="projects-preview">
        <h3>📜 Certifications</h3>
        <p className="summary skills-summary">
          Credentials that showcase my commitment to continuous learning and
          professional growth{" "}
        </p>

        <div className="about-cards-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="about-card">
              <h4>{cert.title}</h4>
              <p>
                <strong>{cert.issuer}</strong>
              </p>
              <p>{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificate;
