// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index'; 
import Resume from './pages/Resume/index'; 


function App() {
  return (
    <main>
      <Header />
      <Footer />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
  );
}
export default App;


