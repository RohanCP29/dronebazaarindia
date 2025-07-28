import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/ServiceCategoryPage.css";

// Example data for each category. Replace or expand as needed.
const categoryData = {
  battery: [
    { name: "LiPo Battery 2200mAh", desc: "High performance, lightweight, long-lasting.", image: "/assets/battery1.jpg" },
    { name: "Li-ion Battery 3000mAh", desc: "Safe, reliable, and powerful.", image: "/assets/battery2.jpg" },
    { name: "High Voltage Battery", desc: "For extra flight time.", image: "/assets/battery3.jpg" }
  ],
  "gps-gnss": [
    { name: "Ublox NEO-M8N GPS Module", desc: "High precision GPS for drones, fast lock, stable signal.", image: "/assets/gps1.jpg" },
    { name: "Beitian BN-880 GPS", desc: "Dual module GPS+Compass for flight controllers.", image: "/assets/gps2.jpg" },
    { name: "Matek SAM-M8Q GNSS", desc: "Multi-GNSS module, compact and reliable.", image: "/assets/gps3.jpg" }
  ]
  // Add other categories here
};

const ServiceCategoryPage = () => {
  const { category } = useParams();
  const items = categoryData[category?.toLowerCase()] || [];

  return (
    <>
      <Header />
      <main className="main-content">
        <h2 className="section-title">{category?.replace(/-/g, ' ')} Products</h2>
        <div className="category-products-list">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div className="category-product-card" key={idx}>
                <img src={item.image} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for this category yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServiceCategoryPage;
