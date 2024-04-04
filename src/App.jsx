// src/App.jsx

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HamburgerHeader from "./components/HamburgerHeader";
import WrapperComponent from "./components/WrapperComponent";
import "slick-carousel/slick/slick.css";         
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

      // Define the function to handle navigation click
      const handleNavClick = (elementId) => {
        // This will scroll to the Element with the corresponding 'name' prop
        document.getElementById(elementId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
  return (
  
    <Router>
    {/* Conditionally render Header or HamburgerHeader based on windowWidth */}
    {windowWidth > 768 ? <Header handleNavClick={handleNavClick}/> : <HamburgerHeader handleNavClick={handleNavClick}/>}
    <WrapperComponent handleNavClick={handleNavClick}/>
  </Router>
  );
}

export default App;
