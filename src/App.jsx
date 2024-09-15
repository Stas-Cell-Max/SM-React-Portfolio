import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router for navigation
import Header from "./components/Header"; // Header component
import WrapperComponent from "./components/WrapperComponent"; // Wrapper for all sections except header
import "slick-carousel/slick/slick.css"; // Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel theme
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for modal functionality
import './App.css'; // Import global CSS

function App() {

  // Function to handle navigation clicks and scroll smoothly to sections
  const handleNavClick = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start', // Align at the start of the section
    });
  };

  return (
    <Router>
      {/* Header component with navigation click handler */}
      <Header handleNavClick={handleNavClick} />
      
      {/* Wrapper component containing all the sections */}
      <WrapperComponent handleNavClick={handleNavClick} />
    </Router>
  );
}

export default App;
