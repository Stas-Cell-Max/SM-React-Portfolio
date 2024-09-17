// src/components/Home/Home.jsx

import React from 'react';
import './Home.css'; // Import CSS specific to the Home section
import Typewriter from 'typewriter-effect'; // Import Typewriter effect component for dynamic text

// Home component displays the landing page section
const Home = ({ handleNavClick }) => {
  
  return (
    <section id="home" className="home-section d-flex min-vh-100 align-items-center justify-content-center">
     <div className="container text-center">
        <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
        <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
          <Typewriter
            options={{
              strings: [
                "I'm Stanislav Morozan",
                "I'm a Web Developer",
                "MERN Stack",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
       <p className="text-5 text-light mb-4">Based in Toronto, Canada.</p>

       <a
            className="btn btn-outline-secondary rounded-pill shadow-none smooth-scroll mt-2"
            onClick={() => handleNavClick('contact')}
          >
            Let's Chat
            </a>
        </div>

        
        <buttons
          className="scroll-down-arrow animated text-white smooth-scroll  btn-link btn-lg"
          onClick={() => handleNavClick('aboutme')}
        >
          <i className="fa fa-chevron-down"></i>
        </buttons>
     
    </section>
  );
};
export default Home;
