// src/components/Header.jsx
import React, {useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = ({ handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  // This function will toggle the visibility of the navigation modal in mobile view
  const toggleNav = () => {
    setIsNavModalOpen(prevState => !prevState);
};


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
    <header className={`header bg-dark text-white  fix-to-left  ${isSticky ? "sticky" : ""} ${isNavModalOpen ? "open" : ""}`}>

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

      <nav className= "nav flex-column" >
        <Link
        to="home"
        className={`nav-link test ${selectedTab === "home" ? "active" : ""}`}
        style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
          setSelectedTab("home");
          handleNavClick("home");
        }}  
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
     
    </header>
  );
};

export default Header;
