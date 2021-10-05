import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let ActiveStyle={
        borderBottom: "2px solid #110235",
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav">
  <div className="container">
    {/* nav logo */}
    <NavLink className="navbar-brand logo fs-3 fw-bold text-dark" to="/">Finan<span className="logo-portion">ciio</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      {/* nav menu */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-dark" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-dark" to="/service">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-dark" to="/about">About us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeStyle={ActiveStyle} className="nav-link menuLink text-dark" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;