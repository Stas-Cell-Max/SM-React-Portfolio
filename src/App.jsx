// src/App.jsx

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import WrapperComponent from "./components/WrapperComponent";

function App() {
  return (
  
    <Router>
      <Header />
      <WrapperComponent />
    </Router>
  );
}

export default App;
