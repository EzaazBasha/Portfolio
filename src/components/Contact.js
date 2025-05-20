import React, { useState } from "react";
import "../Styles/Home.css";
import "../Styles/About.css";
import "../Styles/Contact.css";
import "../Styles/Footer.css";

import Footer from "./Footer";
import contactBanner from "../Assets/images/Contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="home-container">
      {/* Banner image */}
      <div style={{ marginBottom: "40px" }}>
        <img
          src={contactBanner}
          alt="Contact Banner"
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(255, 255, 0, 0.1)",
          }}
        />
      </div>

      <section className="contact-section">
        <h3>📨 Get In Touch</h3>
        <p className="summary skills-summary">
          Let’s turn ideas into action — I’m just a message away.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn contact-btn">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
