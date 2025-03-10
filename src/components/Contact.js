import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch, feel free to reach out through any of the
        platforms below:
      </p>
      <ul className="contact-list">
        <li>
          <a
            href="mailto:shresthaprajwal076@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>shresthaprajwal076@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/prajwalol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/prajwal-shrestha-910469307/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/prajwalshrestha___/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100082355192786/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
