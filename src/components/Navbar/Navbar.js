import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="https://i.ibb.co/wS3yfv5/logo.png" alt="logo" />
      <nav>
        <NavLink to="/home" className="navLinks">
          Home
        </NavLink>
        <NavLink to="/services" className="navLinks">
          Services
        </NavLink>
        <NavLink to="/about" className="navLinks">
          About us
        </NavLink>
        <NavLink to="/livingOptions" className="navLinks">
          Living Options
        </NavLink>
        <NavLink to="/contact" className="navLinks">
          Contact us
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
