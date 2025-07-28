import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = ({ name, icon, price, contact, callToBuyText }) => (
  <div className="service-card">
    <div className="service-icon">
      {icon ? <img src={icon} alt={name} /> : <span role="img" aria-label={name}>🔧</span>}
    </div>
    <div className="service-name">{name}</div>
    {price && (
      <div className="service-price" style={{ margin: '8px 0', color: '#7ed957', fontWeight: 600 }}>
        ₹{price}
      </div>
    )}
    {contact && (
      <a className="service-contact-btn" href={`tel:${contact}`} style={{
        background: '#7ed957', color: '#fff', padding: '0.5rem 1.1rem', borderRadius: 6, fontWeight: 500, textDecoration: 'none', display: 'inline-block', marginTop: 4
      }}>
        {callToBuyText || 'Call Now'}
      </a>
    )}
  </div>
);

export default ServiceCard;
