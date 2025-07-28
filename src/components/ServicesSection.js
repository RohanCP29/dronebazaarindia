import React from "react";
import ServiceCard from "./ServiceCard";
import "../styles/ServicesSection.css";
import { Link } from "react-router-dom";
import { translations } from "../i18n";

const services = [
  { name: "Battery" },
  { name: "Flight Controller" },
  { name: "Motor" },
  { name: "Propeller" },
  { name: "Camera" },
  { name: "Carbon Fibre" },
  { name: "Connectors" },
  { name: "Electronic Speed Controllers" },
  { name: "GPS" },
  { name: "Wires" }
];


const ServicesSection = ({ language = 'en' }) => (
  <section id="services">
    <h2 className="section-title">{translations[language].ourServices}</h2>
    <div className="services-list">
      {services.map((service, idx) => {
        const urlName = service.name.toLowerCase().replace(/ /g, "-");
        return (
          <Link key={idx} to={`/services/${urlName}`} style={{ textDecoration: 'none' }}>
            <ServiceCard name={service.name} icon={service.icon} />
          </Link>
        );
      })}
    </div>
  </section>
);

export default ServicesSection;
