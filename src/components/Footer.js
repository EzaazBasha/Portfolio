import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

import githubIcon from "../Assets/images/github.png";
import linkedinIcon from "../Assets/images/linkedin.png";
import emailIcon from "../Assets/images/email.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-message">
        Recently Graduated with B.Tech in Computer Science and Engineering. Open to collaborations, tech discussions, and new opportunities.
      </p>

      <div className="social-links" role="list">
        <a
          href="https://www.linkedin.com/in/ezaazbasha/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn Profile"
        >
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/EzaazBasha"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub Profile"
        >
          <img src={githubIcon} alt="GitHub icon" />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:ezaazbasha786@gmail.com"
          className="social-link"
          aria-label="Send Email"
        >
          <img src={emailIcon} alt="Email icon" />
          <span>Email</span>
        </a>
      </div>

      <Link to="/contact" className="btn contact-btn">
        Contact Me
      </Link>

      <small className="footer-copy">
        © 2025 Ezaaz Basha. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
