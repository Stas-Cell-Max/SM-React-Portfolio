// src/components/Header.jsx

import React from 'react';
import Navigation from './Navigation'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Stanislav Morozan</a>
          <Navigation /> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
