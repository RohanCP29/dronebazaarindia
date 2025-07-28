import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p style={{marginBottom: 8}}>
        <strong>Address:</strong><br />
        Drone Bazaar, Kameri Rd, near Rudra Chat, Uran Islampur, Kameri, Maharashtra 415409
      </p>
      <p style={{marginBottom: 8}}>
        <a href="https://maps.app.goo.gl/Ad34A3nQYZynfJyt7" target="_blank" rel="noopener noreferrer" style={{color: '#7ed957', fontWeight: 500}}>Visit our store</a>
      </p>
      <p style={{marginBottom: 8}}>
        <strong>Phone:</strong> <a href="tel:+918530486629" style={{color: '#7ed957', fontWeight: 500}}>+91 8530486629</a>
      </p>
      <p>&copy; {new Date().getFullYear()} DroneBaazar India. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
