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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 16 }}>
        <label htmlFor="lang-select" style={{ fontWeight: 500, marginBottom: 2 }}>
          {language === 'mr' ? 'भाषा:' : 'Language:'}
        </label>
        <select
          id="lang-select"
          className="lang-select"
          value={language}
          onChange={e => onLanguageChange && onLanguageChange(e.target.value)}
          style={{ borderRadius: 6, padding: '0.3rem 0.7rem', fontWeight: 500 }}
          aria-label={language === 'mr' ? 'भाषा निवडा' : 'Select language'}
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>
      </div>
    </div>
  </header>
);

export default Header;
