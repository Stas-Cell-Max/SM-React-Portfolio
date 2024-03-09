// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-scroll'; // This package helps with smooth scrolling
import profileImage from '../assets/images/profile.jpg';
import './Header.css';


const Header = () => {
  return (
    <header className="header bg-dark text-white">
    <div className="profile-container">
    <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Stanislav Morozan</h1>
    </div>
    <nav className="nav flex-column">
      <Link to="home" className="nav-link" spy={true} smooth={true} duration={500}>
        Home
      </Link>
      <Link to="aboutme" className="nav-link" spy={true} smooth={true} duration={500}>
        About Me
      </Link>
      <Link to="whatido" className="nav-link" spy={true} smooth={true} duration={500}>
        What I Do
      </Link>
      <Link to="resume" className="nav-link" spy={true} smooth={true} duration={500}>
        Resume
      </Link>
      <Link to="portfolio" className="nav-link" spy={true} smooth={true} duration={500}>
        Portfolio
      </Link>
      <Link to="testimonial" className="nav-link" spy={true} smooth={true} duration={500}>
        Testimonial
      </Link>
      <Link to="contact" className="nav-link" spy={true} smooth={true} duration={500}>
        Contact
      </Link>
    </nav>
    <div className="social-links">
      <a href="https://linkedin.com/in/stanislavmorozan" target="_blank" rel="noopener noreferrer" className="icon-link">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/Stas-Cell-Max" target="_blank" rel="noopener noreferrer" className="icon-link">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://facebook.com/stas.moozan" target="_blank" rel="noopener noreferrer" className="icon-link">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com/stas_moozan" target="_blank" rel="noopener noreferrer" className="icon-link">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </header>
  );
};

export default Header;
