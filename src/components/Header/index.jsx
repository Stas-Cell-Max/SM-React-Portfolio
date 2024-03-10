// src/components/Header.jsx

import React, {useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";


const Header = () => {

  const [isSticky, setIsSticky] = useState(false);  // State to control whether the header is sticky
  const [isNavModalOpen, setIsNavModalOpen] = useState(true);// State to control the responsive navbar modal
  
  const checkScrollTop = () => {   // Function to check the scroll position and set the header to sticky
    if (window.scrollY > 180) {
      setIsSticky(true);   // When scrolled past 180px, set the header to sticky
    } else {
      setIsSticky(false);  // When scrolled back to top, remove the sticky class
    }
  };

  const handleScrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsNavModalOpen(true); // Close the nav modal when a link is clicked
  };
  
  useEffect(() => {   // This effect runs once when the component mounts to add the scroll event listener
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop); // Clean-up function to remove the event listener when the component unmounts
  }, []);
  
  const toggleNav = () => {setIsNavOpen(!isNavOpen);};
  return (
    <header className={`header bg-dark text-white vh-100 fix-to-left ${isSticky ? "sticky" : ""}`}>
      <div className="profile-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1669042646165-1878c78e6604?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
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
