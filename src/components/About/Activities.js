import React from "react";
import Footer from "../Footer";
import "../../Styles/Home.css";
import "../../Styles/About.css";
import activityBanner from "../../Assets/images/Activities.png";

const activityData = [
  {
    icon: "📝",
    title: "Content & Media Creation",
    description: "Served as an editor for the college magazine, ensuring content quality, structure, and consistency across multiple submissions. Additionally, took the lead in editing educational videos for the Logic of the Day series, focusing on improving clarity and engagement through effective visual storytelling."
  },
  {
    icon: "🎓",
    title: "Mentorship & Technical Leadership",
    description: "Mentored juniors in ServiceNow development and administration, guiding them through real-world scenarios to strengthen their practical understanding and problem-solving skills. Also led daily Logic of the Day sessions, where I designed and facilitated exercises to improve logical reasoning and aptitude among peers.",
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    description: "Actively participated in an NSS (National Service Scheme) camp, contributing to community-driven initiatives, building teamwork, and engaging in activities that fostered social responsibility and leadership beyond the classroom."
  },
];

const Activities = () => {
  return (
    <div className="home-container">
      <div style={{ marginBottom: "40px" }}>
        <img
          src={activityBanner}
          alt="Activities Banner"
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
        <h3>🏆 Extracurricular Activities</h3>
        <p className="summary skills-summary">
          Shaping skills beyond the classroom — where leadership, creativity, and passion thrive.
        </p>

        <div className="about-cards-grid">
          {activityData.map((item, index) => (
            <div key={index} className="about-card">
              <div className="skill-item">
                <span className="skill-emoji">{item.icon}</span>
                <span className="skill-text">{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
