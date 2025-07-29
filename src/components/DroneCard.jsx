import React from "react";
import "../styles/DroneCard.css";

const DroneCard = ({ name, price, image, description, contact, onContact, callToBuyText }) => {
  // Remove commas and parse price as number
  const numericPrice = Number(String(price).replace(/,/g, ""));
  const discount = 0.10;
  const discountedPrice = Math.round(numericPrice * (1 - discount));

  return (
    <div className="drone-card">
      <div className="drone-img">
        {/* Replace src with your image path */}
        <img src={image} alt={name} />
      </div>
      <div className="drone-info">
        <h2>{name}</h2>
        <p className="drone-desc">{description}</p>
        <p className="drone-price">
          Price: <span style={{ textDecoration: 'line-through', color: '#888' }}>₹{numericPrice.toLocaleString()}</span>
          <span style={{ color: '#7ed957', fontWeight: 'bold', marginLeft: 8 }}>
            ₹{discountedPrice.toLocaleString()} <span style={{fontSize: '0.95em', color: '#FF0000'}}>(10% OFF)</span>
          </span>
        </p>
        {typeof onContact === 'function' ? (
          <button className="drone-contact" onClick={onContact}>{callToBuyText}</button>
        ) : (
          <a className="drone-contact" href={`tel:${contact}`}>{callToBuyText}</a>
        )}
      </div>
    </div>
  );
};

export default DroneCard;
