

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerHeader.css';

const HamburgerHeader = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [selectedTab, setSelectedTab] = useState("home");
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);
  
  return (
    <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
      <div className="container-fluid position-relative h-100 flex-lg-row ps-3 px-lg-3 pt-lg-3 pb-lg-2">
        {/* Logo */}
        <div className="profile-container">
      <div className="shadow"> 
        <img
          src="https://media.licdn.com/dms/image/D5603AQHvhrfO7_qk0Q/profile-displayphoto-shrink_800_800/0/1708111679202?e=1715817600&v=beta&t=ccjlk-99gBuLRePPCx2lMsoBsIiwJdHxPuY3syfpark"
          alt="Profile"
          className="profile-image"
        />
        <h2>Stanislav Morozan</h2>
        </div>
      </div>
        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#header-nav"
          aria-controls="header-nav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="header-nav">
          {/* Navigation Links */}
         <nav className={`nav flex-column ${!isNavModalOpen ? '' : 'open'}`}>
        <Link
         onClick={() => {
          setSelectedTab("home");
          handleNavClick("home");
        }}
        to="home"
        className={`nav-link test ${selectedTab === "home" ? "active" : ""}`}
        style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          
        >
          Home
        </Link>
        <Link
        activeClass="active"
          to="aboutme"
          className={`nav-link ${selectedTab === "aboutme" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setSelectedTab("aboutme");
            handleNavClick("aboutme");
          }}
        >
          About Me
        </Link>
        <Link
        activeClass="whatido"
        to="whatido"
        className={`nav-link ${selectedTab === "whatido" ? "active" : ""}`}
        style={{ cursor: "pointer" }}
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => {
          setSelectedTab("whatido");
          handleNavClick("whatido");
        }}
        >
          What I Do
        </Link>
        <Link
       activeClass="resume"
       to="resume"
       className={`nav-link ${selectedTab === "resume" ? "active" : ""}`}
       style={{ cursor: "pointer" }}
       spy={true}
       smooth={true}
       duration={500}
       onClick={() => {
         setSelectedTab("resume");
         handleNavClick("resume");
       }}
        >
          Resume
        </Link>
        <Link
         activeClass="portfolio"
         to="portfolio"
         className={`nav-link ${selectedTab === "portfolio" ? "active" : ""}`}
         style={{ cursor: "pointer" }}
         spy={true}
         smooth={true}
         duration={500}
         onClick={() => {
           setSelectedTab("portfolio");
           handleNavClick("portfolio");
         }}
        >
          Portfolio
        </Link>
        <Link
           activeClass="testimonial"
           to="testimonial"
           className={`nav-link ${selectedTab === "testimonial" ? "active" : ""}`}
           style={{ cursor: "pointer" }}
           spy={true}
           smooth={true}
           duration={500}
           onClick={() => {
             setSelectedTab("testimonial");
             handleNavClick("testimonial");
           }}
        >
          Testimonial
        </Link>
        <Link
         activeClass="contact"
         to="contact"
         className={`nav-link ${selectedTab === "contact" ? "active" : ""}`}
         style={{ cursor: "pointer" }}
         spy={true}
         smooth={true}
         duration={500}
         onClick={() => {
           setSelectedTab("contact");
           handleNavClick("contact");
         }}
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
          {/* Social Icons (if any) */}
          <ul className="social-icons list-unstyled d-flex">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">TW</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a></li>
            {/* Add more social icons as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerHeader;
