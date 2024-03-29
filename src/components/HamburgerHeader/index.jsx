import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './HamburgerHeader.css'; // Import the CSS file for styling

const HamburgerHeader = ({ handleNavClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="hamburger-header">
      <div className="hamburger-menu" onClick={toggleNav}>
        <i className="fas fa-bars"></i>
      </div>

      <nav className={`nav-modal ${isNavOpen ? 'active' : ''}`}>
        <Link onClick={() => handleNavClick('home')} to="home" className="nav-link">
          Home
        </Link>
        <Link onClick={() => handleNavClick('aboutme')} to="aboutme" className="nav-link">
          About Me
        </Link>
        <Link onClick={() => handleNavClick('whatido')} to="whatido" className="nav-link">
          What I Do
        </Link>
        <Link onClick={() => handleNavClick('resume')} to="resume" className="nav-link">
          Resume
        </Link>
        <Link onClick={() => handleNavClick('portfolio')} to="portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link onClick={() => handleNavClick('testimonial')} to="testimonial" className="nav-link">
          Testimonial
        </Link>
        <Link onClick={() => handleNavClick('contact')} to="contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default HamburgerHeader;