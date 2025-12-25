import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li></li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};
