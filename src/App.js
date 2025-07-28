import React, { useState } from "react";
import Header from "./components/Header";
import { translations } from "./i18n";
import Footer from "./components/Footer";
import DroneCard from "./components/DroneCard";
import ServicesSection from "./components/ServicesSection";
import HappyCustomers from "./components/HappyCustomers";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ServiceCategoryPage from "./components/ServiceCategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const drones = [
  {
    name: "Aerial Pro X1",
    price: "1,20,000",
    // Replace with your image path in public/assets or src/assets
    image: "https://via.placeholder.com/300x180?text=Drone+1",
    description: "Professional drone with 4K camera, 30min flight time, GPS, and advanced stabilization.",
    contact: "9876543210"
  },
  {
    name: "SkyMaster 200",
    price: "95,000",
    image: "https://via.placeholder.com/300x180?text=Drone+2",
    description: "Compact drone for hobbyists, HD camera, 20min flight, easy controls.",
    contact: "9876543210"
  },
  {
    name: "AgriFlyer",
    price: "2,10,000",
    image: "https://via.placeholder.com/300x180?text=Drone+3",
    description: "Agricultural drone for crop monitoring and spraying, robust and reliable.",
    contact: "9876543210"
  }
];

function HomePage({ onContact, language }) {
  return (
    <div className="App">
      <main className="main-content">
        <section
          className="hero"
          style={{
            background: `linear-gradient(rgba(44,62,80,0.28), rgba(44,62,80,0.32)), url('/assets/backimage.png') center/cover no-repeat`,
            padding: 'clamp(2rem, 7vw, 4rem) 1rem clamp(1.2rem, 4vw, 2.5rem) 1rem',
            minHeight: 'clamp(180px, 40vw, 340px)'
          }}
        >
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(1.1rem, 6vw, 2.5rem)',
              margin: 0,
              color: '#fff',
              textShadow: '0 2px 12px rgba(44,62,80,0.22)'
            }}
          >
            {translations[language].heroTitle}
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#f3f5fa',
              maxWidth: 700,
              margin: '0 auto',
              fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)',
              fontWeight: 500,
              textShadow: '0 1px 8px rgba(44,62,80,0.18)'
            }}
          >
            {translations[language].heroDesc}
          </p>
        </section>
        <section id="drones">
          <h2 className="section-title">{language === 'mr' ? 'आमचे ड्रोन' : 'Our Drones'}</h2>
          <div className="drones-list">
            {drones.map((drone, idx) => (
              <DroneCard key={idx} {...drone} onContact={onContact} />
            ))}
          </div>
        </section>
        <ServicesSection language={language} />
        <HappyCustomers language={language} />
        <section id="contact">
          <h2 className="section-title">{translations[language].contactUs}</h2>
          <p>{language === 'mr' ? 'अधिक माहितीसाठी किंवा ऑर्डर देण्यासाठी आम्हाला कॉल करा:' : 'Call us for more info or to place an order:'}</p>
          <button className="contact-btn" onClick={onContact}>{translations[language].callNow}</button>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}

function ContactModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.3)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000}} onClick={onClose}>
      <div style={{background:'#fff', borderRadius:12, padding:'2rem 1.5rem', boxShadow:'0 2px 16px rgba(0,0,0,0.12)', minWidth:250, textAlign:'center'}} onClick={e=>e.stopPropagation()}>
        <h3 style={{marginBottom: '1rem'}}>Contact Options</h3>
        <a href="tel:+918530486629" style={{display:'block', margin:'0.5rem 0', background:'#7ed957', color:'#fff', padding:'0.7rem 1.5rem', borderRadius:6, textDecoration:'none', fontWeight:500}}>Call</a>
        <a href="https://wa.me/918530486629" target="_blank" rel="noopener noreferrer" style={{display:'block', margin:'0.5rem 0', background:'#25D366', color:'#fff', padding:'0.7rem 1.5rem', borderRadius:6, textDecoration:'none', fontWeight:500}}>WhatsApp</a>
        <button onClick={onClose} style={{marginTop:'1rem', background:'none', border:'none', color:'#888', fontSize:'1rem', cursor:'pointer'}}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = React.useState('en');
  const openContact = () => setShowModal(true);
  const closeContact = () => setShowModal(false);
  return (
    <BrowserRouter>
      <ContactModal open={showModal} onClose={closeContact} />
      <Header language={language} onLanguageChange={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage onContact={openContact} language={language} />} />
        <Route path="/services/:category" element={<ServiceCategoryPage onContact={openContact} language={language} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
