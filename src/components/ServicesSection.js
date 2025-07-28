import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import "../styles/ServicesSection.css";
import { Link } from "react-router-dom";
import { translations } from "../i18n";

const services = [
  { key: "battery" },
  { key: "flightController" },
  { key: "motor" },
  { key: "propeller" },
  { key: "camera" },
  { key: "frames" },
  { key: "connectors" },
  { key: "esc" },
  { key: "gps" },
  { key: "wires" }
];



const ServicesSection = ({ language = 'en' }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services by translated name
  const filteredServices = services.filter(service => {
    const name = (translations[language].serviceNames[service.key] || '').toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  });

  return (
    <section id="services">
      <h2 className="section-title">{translations[language].ourServices}</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <input
          type="text"
          placeholder={language === 'mr' ? 'सेवा शोधा...' : 'Search services...'}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          style={{ padding: '0.4rem 1rem', borderRadius: 6, border: '1px solid #ccc', fontSize: 16, minWidth: 180 }}
        />
        <button
          onClick={() => setSearchTerm(searchValue)}
          style={{ padding: '0.4rem 1.2rem', borderRadius: 6, background: '#2d6cdf', color: '#fff', border: 'none', fontWeight: 500, cursor: 'pointer' }}
        >
          {language === 'mr' ? 'शोधा' : 'Search'}
        </button>
      </div>
      <div className="services-list">
        {filteredServices.map((service, idx) => {
          const urlName = service.key.toLowerCase();
          return (
            <Link key={idx} to={`/services/${urlName}`} style={{ textDecoration: 'none' }}>
              <ServiceCard name={translations[language].serviceNames[service.key]} icon={service.icon} />
            </Link>
          );
        })}
        {filteredServices.length === 0 && (
          <div style={{ textAlign: 'center', color: '#888', marginTop: 32 }}>
            {language === 'mr' ? 'कोणतीही सेवा सापडली नाही.' : 'No services found.'}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
