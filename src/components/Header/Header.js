import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let ActiveStyle={
        borderBottom: "2px solid white",
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav">
  <div className="container">
    <NavLink className="navbar-brand logo fs-3 fw-bold" to="/">Finan<span className="logo-portion">ciio</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-white" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-white" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-white" to="/about">About us</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-white" to="/blog">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-white" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;