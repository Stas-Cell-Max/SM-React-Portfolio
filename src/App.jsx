// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index'; 
import Resume from './pages/Resume/index'; 

function App() {
  return (
    <>
      
      <Header /> 
      <div className="content">
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </div>
      <Footer />
      </>
  );
}

export default App;
