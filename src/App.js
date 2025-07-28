import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DroneCard from "./components/DroneCard";
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

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="hero">
          <h2 className="section-title">Welcome to DroneBaazar India</h2>
          <p style={{textAlign: 'center', color: '#555', maxWidth: 600, margin: '0 auto'}}>Your trusted source for the latest drones in India. Explore our range, compare prices, and contact us to buy your perfect drone!</p>
        </section>
        <section id="drones">
          <h2 className="section-title">Our Drones</h2>
          <div className="drones-list">
            {drones.map((drone, idx) => (
              <DroneCard key={idx} {...drone} />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2 className="section-title">Contact Us</h2>
          <p>Call us for more info or to place an order:</p>
          <a className="contact-btn" href="tel:9876543210">Call Now</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
