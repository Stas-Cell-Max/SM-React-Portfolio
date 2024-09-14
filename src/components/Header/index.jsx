// src/components/Header.jsx
import React, { useState, useEffect } from "react"; // Import necessary React hooks
import { Link } from "react-scroll"; // Link for smooth scrolling to sections
import "./Header.css"; // Import CSS specific to Header

// Header component accepts handleNavClick as a prop to manage navigation click behavior
const Header = ({ handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false); // State to manage sticky header behavior
  const [selectedTab, setSelectedTab] = useState("home"); // State to track the currently selected tab
  const [isNavModalOpen, setIsNavModalOpen] = useState(false); // State to manage mobile navigation modal visibility

  // Function to toggle navigation modal in mobile view
  const toggleNav = () => {
    setIsNavModalOpen(prevState => !prevState);
};

 // useEffect to manage header stickiness on scroll
useEffect(() => {
  const checkScrollTop = () => {
      if (window.scrollY > 180) {
          setIsSticky(true); // Set sticky class when scrolled down
      } else {
          setIsSticky(false); // Remove sticky class when at top
      }
  };

  // Add scroll event listener
    window.addEventListener("scroll", checkScrollTop);
      // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

 

  return (
    <header className={`header bg-dark text-white  fix-to-left  ${isSticky ? "sticky" : ""} ${isNavModalOpen ? "open" : ""}`}>

      <div className="profile-container">
      <div className="shadow"> 
        <img
          src="images/profile.jpg"
          alt="profile-img"
          className="profile-image"
        />
        <h2>Stanislav Morozan</h2>
        </div>
      </div>

      <nav className= "nav flex-column" >
        <Link
         onClick={() => {
          setSelectedTab("home");
          handleNavClick("home");
        }}
        activeClass="home"      
        className={`nav-link test ${selectedTab === "home" ? "active" : ""}`}
        style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80} 
        >
          Home
        </Link>
        
        <Link
         onClick={() => {
          setSelectedTab("aboutme");
          handleNavClick("aboutme");
        }}
        activeClass="aboutme"      
          className={`nav-link ${selectedTab === "aboutme" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          About Me
        </Link>
        
        <Link
         onClick={() => {
          setSelectedTab("whatido");
          handleNavClick("whatido");
        }}
        activeClass="whatido"       
        className={`nav-link ${selectedTab === "whatido" ? "active" : ""}`}
        style={{ cursor: "pointer" }}
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}       
        >
          What I Do
        </Link>
        <Link
         onClick={() => {
          setSelectedTab("resume");
          handleNavClick("resume");
        }}
       activeClass="resume"      
       className={`nav-link ${selectedTab === "resume" ? "active" : ""}`}
       style={{ cursor: "pointer" }}
       spy={true}
       smooth={true}
       duration={500}
       offset={-80}     
        >
          Resume
        </Link>
        <Link
         onClick={() => {
          setSelectedTab("portfolio");
          handleNavClick("portfolio");
        }}
         activeClass="portfolio"        
         className={`nav-link ${selectedTab === "portfolio" ? "active" : ""}`}
         style={{ cursor: "pointer" }}
         spy={true}
         smooth={true}
         duration={500}
         offset={-80}
        >
          Portfolio
        </Link>

        <Link 
          onClick={() => {
          setSelectedTab("testimonial");
          handleNavClick("testimonial");
          }}
           activeClass="testimonial"
           className={`nav-link ${selectedTab === "testimonial" ? "active" : ""}`}
           style={{ cursor: "pointer" }}
           spy={true}
           smooth={true}
           duration={500}
           offset={-80}
        >
          Testimonial
        </Link>

        <Link
         onClick={() => {
          setSelectedTab("contact");
          handleNavClick("contact");
          }}
         activeClass="contact"
         className={`nav-link ${selectedTab === "contact" ? "active" : ""}`}
         style={{ cursor: "pointer" }}
         spy={true}
         smooth={true}
         duration={500}
         offset={-80}
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
