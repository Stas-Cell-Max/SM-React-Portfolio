import React, { useState, useEffect } from "react"; // Import necessary React hooks
import { Link } from "react-scroll"; // Link for smooth scrolling to sections
import "./Header.css"; // Import CSS specific to Header

// Header component accepts handleNavClick as a prop to manage navigation click behavior
const Header = ({ handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false); // State to manage sticky header behavior
  const [selectedTab, setSelectedTab] = useState("home"); // State to track the currently selected tab
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage mobile navigation modal visibility
  const offset = window.innerWidth <= 768 ? -50 : -80; // Calculate offset dynamically based on screen width

  // Function to toggle navigation modal in mobile view
  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    console.log("Nav Open State: ", !isNavOpen); 
  };

  // useEffect to manage header stickiness on scroll
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    const debounceScroll = () => {
      let timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 100); // Adjust delay as necessary
      };
    };
  
    window.addEventListener("scroll", debounceScroll());
  
    return () => window.removeEventListener("scroll", debounceScroll());
  }, []);
  
  
  return (
    <header className={`header bg-dark text-white ${isSticky ? "sticky" : ""}`}>
      <div className="menu-container">
      {/* Hamburger menu for mobile */}
      <div className="mobile-hamburger" onClick={toggleNav} aria-label="Toggle Navigation">
      <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Profile Section */}
      <div className="profile-container">
        <div className="shadow">
          <img
            src="images/profile.jpg"
            alt="profile-img"
            className="profile-image"
          />
         
        </div>
      </div>

      <div>
      <h2>Stanislav Morozan</h2>
      </div>
      
       {/* Navigation */}
      
       <nav className={`nav ${isNavOpen ? "nav-open" : ""}`}>
        <Link
          onClick={() => {
            setSelectedTab("home");
            handleNavClick("home");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="home"
          className={`nav-link ${selectedTab === "home" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset} 
        >
          Home
        </Link>

        <Link
          onClick={() => {
            setSelectedTab("aboutme");
            handleNavClick("aboutme");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="aboutme"
          className={`nav-link ${selectedTab === "aboutme" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
        >
          About Me
        </Link>

        <Link
          onClick={() => {
            setSelectedTab("whatido");
            handleNavClick("whatido");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="whatido"
          className={`nav-link ${selectedTab === "whatido" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
        >
          What I Do
        </Link>
        <Link
          onClick={() => {
            setSelectedTab("resume");
            handleNavClick("resume");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="resume"
          className={`nav-link ${selectedTab === "resume" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
        >
          Resume
        </Link>
        <Link
          onClick={() => {
            setSelectedTab("portfolio");
            handleNavClick("portfolio");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="portfolio"
          className={`nav-link ${selectedTab === "portfolio" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
        >
          Portfolio
        </Link>

        <Link
          onClick={() => {
            setSelectedTab("testimonial");
            handleNavClick("testimonial");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="testimonial"
          className={`nav-link ${selectedTab === "testimonial" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
        >
          Testimonial
        </Link>

        <Link
          onClick={() => {
            setSelectedTab("contact");
            handleNavClick("contact");
            setIsNavOpen(false); // Close nav on selection
          }}
          activeClass="contact"
          className={`nav-link ${selectedTab === "contact" ? "active" : ""}`}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
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
      </div>
    </header>
  );
};

export default Header;
