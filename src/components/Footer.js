import React from "react";
import "../styles/Footer.css";
import { translations } from "../i18n";

const Footer = ({ language = 'en' }) => (
  <footer className="footer">
    <div className="container">
      <p style={{marginBottom: 8}}>
        <strong>{translations[language].address}</strong><br />
        Drone Bazaar, Kameri Rd, near Rudra Chat, Uran Islampur, Kameri, Maharashtra 415409
      </p>
      <p style={{marginBottom: 8}}>
        <a href="https://maps.app.goo.gl/Ad34A3nQYZynfJyt7" target="_blank" rel="noopener noreferrer" style={{color: '#7ed957', fontWeight: 500}}>{translations[language].visitStore}</a>
      </p>
      <p style={{marginBottom: 8}}>
        <strong>{translations[language].phone}</strong> <a href="tel:+918530486629" style={{color: '#7ed957', fontWeight: 500}}>+91 8530486629</a>
      </p>
      <p style={{marginBottom: 8}}>
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{color: '#6366f1', fontWeight: 500, textDecoration: 'underline'}}>{translations[language].privacyPolicy}</a>
      </p>
      <p>&copy; {new Date().getFullYear()} DroneBaazar India. {translations[language].allRights}</p>
    </div>
  </footer>
);

export default Footer;
