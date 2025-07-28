import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <div className="container header-content">
      <h1 className="logo">DroneBaazar India</h1>
      <nav className="nav">
        <a href="#drones">Drones</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
