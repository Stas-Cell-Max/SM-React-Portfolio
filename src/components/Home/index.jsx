// src/components/Home/Home.jsx

import React from 'react';

import './Home.css';
// import backgroundImage from './profile.jpg'; // Make sure to have a background image in the assets folder

const Home = () => {
  return (
    <section id="home" style={{ 
      // backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white'
    }}>
      <h1 className="section-heading">Welcome</h1>
        <hr className="my-4" />
      <h2>I'm Stanislav Morozan</h2>
      <p>Based in Toronto, Canada.</p>
      <button className="btn btn-primary mt-4">Let's Talk</button>
    </section>
  );
};

export default Home;
