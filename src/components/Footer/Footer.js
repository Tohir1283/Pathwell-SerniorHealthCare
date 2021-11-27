import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#322c29" }}>
      <div
        className="d-lg-flex justify-content-around align-items-center pt-2"
        style={{ height: "19rem" }}
      >
        <div className="footerIcon">
          <img src="https://i.ibb.co/nM851Wb/instagram.png" alt="instagram" />
          <img src="https://i.ibb.co/WHvzCGc/facebook-1.png" alt="facebook" />
          <img src="https://i.ibb.co/6ZP4SPC/linkedin.png" alt="twitter" />
          <img src="https://i.ibb.co/gR4ptzV/twitter-1.png" alt="linkedIn" />
        </div>
        <div className="footerLogo">
          <img src="https://i.ibb.co/LYF5xxg/logo-footer.png" alt="logo" />
        </div>
        <div className="footerText" style={{ color: "snow" }}>
          <h3>PathWell © 2021</h3>
          <h6>All rights reserved</h6>
        </div>
      </div>
      <div className="footerNavbar" style={{ paddingBottom: "3rem" }}>
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
      </div>
    </div>
  );
};

export default Footer;
