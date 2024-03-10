// src/components/Home/Home.jsx

import React from 'react';
import './Home.css';
// import backgroundImage from './profile.jpg'; // Make sure to have a background image in the assets folder

const Home = () => {
 
  return (
    <section id="home" className="home-section">
     
        <h1 className="section-heading">Welcome</h1>
        <h2>I'm Stanislav Morozan</h2>
        <p>Based in Toronto, Canada.</p>
        <button className="btn btn-primary mt-4">Let's Talk</button>
      
    </section>
  );
};

export default Home;
