// src/components/Header.jsx

import React, { useEffect } from "react";
import { Link, Element } from "react-scroll"; // This package helps with smooth scrolling
// import profileImage from './profile.jpg';
import "./Header.css";
import Home from "../Home";
import AboutMe from "../AboutMe";

const Header = () => {
  return (
    <header className="header bg-dark text-white vh-100 fix-to-left">
      <div className="profile-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1669042646165-1878c78e6604?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="profile-image"
        />
        <h1>Stanislav Morozan</h1>
      </div>
      <nav className="nav flex-column">
        <Link
          to="home"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="aboutme"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          About Me
        </Link>
        <Link
          to="whatido"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          What I Do
        </Link>
        <Link
          to="resume"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          Resume
        </Link>
        <Link
          to="portfolio"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          to="testimonial"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          Testimonial
        </Link>
        <Link
          to="contact"
          className="nav-link"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </nav>

      <div className="social-links">
        <a
          href="https://linkedin.com/in/stanislavmorozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Stas-Cell-Max"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com/stas.moozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com/stas_moozan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
