// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import WhatIDo from "./components/WhatIDo";
import WrapperComponent from "./components/WrapperComponent";

function App() {
  return (
  
    <Router>
      <Header />
      <WrapperComponent />
      <Footer />
    </Router>
  );
}

export default App;
