import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = ({ name, icon }) => (
  <div className="service-card">
    {/* You can add icons/images for each service if you want */}
    <div className="service-icon">
      {icon ? <img src={icon} alt={name} /> : <span role="img" aria-label={name}>🔧</span>}
    </div>
    <div className="service-name">{name}</div>
  </div>
);

export default ServiceCard;
