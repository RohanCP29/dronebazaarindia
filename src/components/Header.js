import React from "react";
import "../styles/Header.css";
import { LANGUAGES, translations } from "../i18n";


const Header = ({ language = 'en', onLanguageChange }) => (
  <header className="header">
    <div className="container header-content">
      <div className="logo-area">
        <img src="/logo_main.png" alt={translations[language].siteName + ' Logo'} className="logo-img" />
        <span className="logo-text">{translations[language].siteName}</span>
      </div>
      <nav className="nav">
        <a href="#drones">{translations[language].nav.drones}</a>
        <a href="#services">{translations[language].nav.services}</a>
        <a href="#contact">{translations[language].nav.contact}</a>
      </nav>
      <select
        className="lang-select"
        value={language}
        onChange={e => onLanguageChange && onLanguageChange(e.target.value)}
        style={{ marginLeft: 16, borderRadius: 6, padding: '0.3rem 0.7rem', fontWeight: 500 }}
        aria-label="Select language"
      >
        {Object.entries(LANGUAGES).map(([code, label]) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
    </div>
  </header>
);

export default Header;
