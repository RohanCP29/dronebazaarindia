import React from "react";
import "../styles/HappyCustomers.css";
import useScrollAnimation from "./useScrollAnimation";
import { translations } from "../i18n";

const customers = [
  {
    name: "Amit Sharma",
    feedback: "Amazing service! My drone was delivered on time and in perfect condition.",
    side: "left",
  },
  {
    name: "Priya Verma",
    feedback: "Customer support was very helpful and friendly. Highly recommend!",
    side: "right",
  },
  {
    name: "Ravi Singh",
    feedback: "Great experience from start to finish. Will buy again!",
    side: "left",
  },
  {
    name: "Neha Patel",
    feedback: "Quality products and quick service. Very satisfied!",
    side: "right",
  },
];


const HappyCustomers = ({ language = 'en' }) => {
  useScrollAnimation();
  return (
    <section className="happy-customers-section">
      <h2 className="happy-customers-title">{translations[language].happyCustomers}</h2>
      <div className="happy-customers-list">
        {customers.map((customer, idx) => (
          <div
            key={idx}
            className={`customer-card ${customer.side}`}
            data-animate={customer.side}
          >
            <div className="customer-feedback">“{customer.feedback}”</div>
            <div className="customer-name">- {customer.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;
