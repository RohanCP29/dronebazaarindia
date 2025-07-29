import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/MoreInfo/index.jsx';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Import service pages
import MotorService from './pages/Services/MotorService';
import FlightControllerService from './pages/Services/FlightControllerService';
import BatteryService from './pages/Services/BatteryService';
import CameraService from './pages/Services/CameraService';
import PropellerService from './pages/Services/PropellerService';
import FramesService from './pages/Services/FramesService';
import GpsService from './pages/Services/GpsService';
import WiresService from './pages/Services/WiresService';
import ConnectorsService from './pages/Services/ConnectorsService';
import './index.css';

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
  const openContact = () => setShowModal(true);
  const closeContact = () => setShowModal(false);

  return (
    <LanguageProvider>
      <ContactModal open={showModal} onClose={closeContact} />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home onContact={openContact} />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About onContact={openContact} />
          </Layout>
        } />

        <Route path="/contact" element={
          <Layout>
            <Contact onContact={openContact} />
          </Layout>
        } />
        <Route path="/privacy-policy" element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        } />

        {/* Service Pages */}
        <Route path="/services/motor" element={
          <Layout>
            <MotorService />
          </Layout>
        } />
        <Route path="/services/flight-controller" element={
          <Layout>
            <FlightControllerService />
          </Layout>
        } />
        <Route path="/services/battery" element={
          <Layout>
            <BatteryService />
          </Layout>
        } />
        <Route path="/services/camera" element={
          <Layout>
            <CameraService />
          </Layout>
        } />
        <Route path="/services/propeller" element={
          <Layout>
            <PropellerService />
          </Layout>
        } />
        <Route path="/services/frames" element={
          <Layout>
            <FramesService />
          </Layout>
        } />
        <Route path="/services/gps" element={
          <Layout>
            <GpsService />
          </Layout>
        } />
        <Route path="/services/wires" element={
          <Layout>
            <WiresService />
          </Layout>
        } />
        <Route path="/services/connectors" element={
          <Layout>
            <ConnectorsService />
          </Layout>
        } />

        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
