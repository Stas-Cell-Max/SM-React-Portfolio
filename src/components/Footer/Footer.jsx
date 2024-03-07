// src/components/Footer/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-auto py-3"> {/* Set background color and text color */}
      <div className="container">
        <div className="row justify-content-center"> {/* Use Bootstrap's grid system for alignment */}
          <div className="col-auto">
            <a href="https://github.com/username" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://linkedin.com/in/username" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://facebook.com/username" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://twitter.com/username" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://instagram.com/username" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
