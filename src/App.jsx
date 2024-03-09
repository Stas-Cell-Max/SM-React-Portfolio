// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about-me" element={<AboutMe />} />
    //     <Route path="/what-i-do" element={<WhatIDo />} />
    //     <Route path="/resume" element={<Resume />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <div className="d-flex h-100">
      <Header />
      <WrapperComponent />
    </div>
  );
}

export default App;
