// src/components/Header.jsx

import React, {useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";



const Header = ({ handleNavClick }) => {

  const [isSticky, setIsSticky] = useState(false);  // State to control whether the header is sticky
  const [isNavModalOpen, setIsNavModalOpen] = useState(true);// State to control the responsive navbar modal
  
  const checkScrollTop = () => {   // Function to check the scroll position and set the header to sticky
    if (window.scrollY > 180) {
      setIsSticky(true);   // When scrolled past 180px, set the header to sticky
    } else {
      setIsSticky(false);  // When scrolled back to top, remove the sticky class
    }
  };

  useEffect(() => {   // This effect runs once when the component mounts to add the scroll event listener
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop); // Clean-up function to remove the event listener when the component unmounts
  }, []);
  
  const toggleNav = () => setIsNavModalOpen(!isNavModalOpen);
  return (
    <header className={`header bg-dark text-white vh-100 fix-to-left ${isSticky ? "sticky" : ""}`}>
      <div className="profile-container">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHvhrfO7_qk0Q/profile-displayphoto-shrink_800_800/0/1708111679202?e=1715817600&v=beta&t=ccjlk-99gBuLRePPCx2lMsoBsIiwJdHxPuY3syfpark"
          alt="Profile"
          className="profile-image"
        />
        <h2>Stanislav Morozan</h2>
      </div>
      <nav className={`nav flex-column ${!isNavModalOpen ? "show" : ""}`}>
        <Link
        activeClass="active"
          to="home"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('home')}
        >
          Home
        </Link>
        <Link
        activeClass="active"
          to="aboutme"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('aboutme')}
        >
          About Me
        </Link>
        <Link
        activeClass="active"
          to="whatido"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('whatido')}
        >
          What I Do
        </Link>
        <Link
        activeClass="active"
          to="resume"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('resume')}
        >
          Resume
        </Link>
        <Link
        activeClass="active"
          to="portfolio"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('portfolio')}
        >
          Portfolio
        </Link>
        <Link
        activeClass="active"
          to="testimonial"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('testimonial')}
        >
          Testimonial
        </Link>
        <Link
        activeClass="active"
          to="contact"
          className="nav-link"
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => handleNavClick('contact')}
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
