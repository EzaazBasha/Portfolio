import React from "react";
import "../../Styles/Education.css";
import educationBanner from "../../Assets/images/Education.png";
import Footer from "../Footer";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Srinivasa Ramaujan Institute of Technology, Anantapur",
    duration: "2021 – 2025",
    details:
      "CGPA: 8.24 / 10. Key subjects: Data Structures, OOP, Web Development, DBMS, OS, Software Engineering.",
  },
  {
    title: "Intermediate (MPC)",
    institution: "Govt Junior College for Boys, Anantapur",
    duration: "2019 – 2021",
    details: "Scored 86.1%. Focused on Maths, Physics, and Chemistry.",
  },
  {
    title: "Secondary School (10th Grade)",
    institution: "Ravindra Bharathi EM High School",
    duration: "2018 – 2019",
    details: "GPA: 9.8 / 10.  building a strong academic foundation and discipline.",
  },
];

const Education = () => {
  return (
    <div className="home-container">
      <div style={{ marginBottom: '40px' }}>
        <img
          src={educationBanner}
          alt="Education Banner"
          style={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(255, 255, 0, 0.1)'
          }}
        />
      </div>

      <section className="roadmap-section">
        <h3 className="roadmap-heading">🎓 Education Roadmap</h3>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>
                  <strong>{item.institution}</strong>
                </p>
                <p>{item.duration}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
