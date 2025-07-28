import React from "react";
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
  { key: "carbonFibre" },
  { key: "connectors" },
  { key: "esc" },
  { key: "gps" },
  { key: "wires" }
];


const ServicesSection = ({ language = 'en' }) => (
  <section id="services">
    <h2 className="section-title">{translations[language].ourServices}</h2>
    <div className="services-list">
      {services.map((service, idx) => {
        const urlName = service.key.toLowerCase();
        return (
          <Link key={idx} to={`/services/${urlName}`} style={{ textDecoration: 'none' }}>
            <ServiceCard name={translations[language].serviceNames[service.key]} icon={service.icon} />
          </Link>
        );
      })}
    </div>
  </section>
);

export default ServicesSection;
