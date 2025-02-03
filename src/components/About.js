import React from 'react';
import './About.css';
import kishoreImage from '../assets/images/kishore.png'; // Path remains the same
import linkedinIcon from '../assets/images/linkin.png';
import instagramIcon from '../assets/images/instagram.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Passport Size Photo */}
        <div className="profile-image">
          <img src={kishoreImage} alt="Profile" className="profile-pic" />
        </div>
        <h2>About Me</h2>
        <p className="intro">Hi... This is Kishore</p>
        <p>
          I am an enthusiastic IT student with a strong passion for technology and problem-solving. My ultimate goal is to become a skilled software engineer, developing innovative and efficient solutions to real-world challenges. I have experience working with technologies like React, Java, and IoT, and I enjoy creating projects that enhance user experiences. Participating in initiatives like the Smart India Hackathon has further sharpened my problem-solving and teamwork skills. I am committed to continuous learning and look forward to contributing meaningfully to the tech industry.
        </p>
        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kishore-elayaraja-275391259/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
