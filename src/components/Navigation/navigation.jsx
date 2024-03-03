// src/components/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about-me">About Me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/resume">Resume</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
