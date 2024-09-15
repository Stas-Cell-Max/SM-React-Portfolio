import React, { useState, useEffect } from "react"; // Import necessary React hooks
import { Link } from "react-scroll"; // Link for smooth scrolling to sections
import "./Header.css"; // Import CSS specific to Header

// Header component accepts handleNavClick as a prop to manage navigation click behavior
const Header = ({ handleNavClick }) => {
  const [isSticky, setIsSticky] = useState(false); // State to manage sticky header behavior
  const [selectedTab, setSelectedTab] = useState("home"); // State to track the currently selected tab
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage mobile navigation modal visibility

  // Function to toggle navigation modal in mobile view
  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    console.log("Nav Open State: ", !isNavOpen); 
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

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll when nav is open
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll when nav is closed
    }
  }, [isNavOpen]);
  
  return (
    <header className={`header bg-dark text-white ${isSticky ? "sticky" : ""}`}>
      {/* Hamburger menu for mobile */}
      <div className="mobile-hamburger" onClick={toggleNav}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Profile Section */}
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

      {/* Navigation */}
      
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
          offset={-80}
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
          offset={-80}
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
          offset={-80}
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
          offset={-80}
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
          offset={-80}
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
          offset={-80}
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
