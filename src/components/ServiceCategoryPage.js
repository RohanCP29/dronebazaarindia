import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { translations } from "../i18n";
import "../styles/ServiceCategoryPage.css";

// Example data for each category. Replace or expand as needed.
const categoryData = {
  battery: [
    { name: "SKYRC PC1080 Dual Channel Charger", desc: "High performance, lightweight, long-lasting.", image: "/assets/battery1.jpg", price: "20,275", contact: "9876543210" },
    { name: "ULTRAPOWER- UP1100 CHARGER", desc: "Safe, reliable, and powerful.", image: "/assets/battery2.jpg", price: "25,255", contact: "9876543210" },
    { name: "GREPOW Tattu 22000mAh 6S Lipo Battery", desc: "For extra flight time.", image: "/assets/battery3.jpg", price: "40,499", contact: "9876543210" },
    { name: "Herewin 6S ", desc: "22.2V 22000mAh 25C Lipo Battery Pack", image: "/assets/battery4.jpg", price: "33,399", contact: "9876543210" }
  ],

  flightController: [
    { name: "SKYRC FC1080 Flight Controller", desc: "High performance, lightweight, long-lasting.", image: "/assets/flightController1.jpg", price: "20,275", contact: "9876543210" },
    { name: "ULTRAPOWER- UP1100 Flight Controller", desc: "Safe, reliable, and powerful.", image: "/assets/flightController2.jpg", price: "25,255", contact: "9876543210" },
    { name: "GREPOW Tattu 22000mAh 6S Flight Controller", desc: "For extra flight time.", image: "/assets/flightController3.jpg", price: "40,499", contact: "9876543210" },
    { name: "Herewin 6S Flight Controller", desc: "22.2V 22000mAh 25C Lipo Flight Controller", image: "/assets/flightController4.jpg", price: "33,399", contact: "9876543210" }
  ],

  motor: [
    { name: "HOBBYWING X8 Rotor With 3011 Propeller Combo", desc: "High performance motor and propeller combo for drones.", image: "/assets/motor1.jpg", price: "14,910", contact: "9876543210" },
    { name: "HOBBYWING-X11 COMBO MOTOR", desc: "Powerful X11 combo motor for advanced drone builds.", image: "/assets/motor2.jpg", price: "31,959", contact: "9876543210" },
    { name: "HOBBYWING-X9 COMBO ROTOR", desc: "Efficient X9 combo rotor for long flight times.", image: "/assets/motor3.jpg", price: "11,193", contact: "9876543210" },
    { name: "HOBBYWING X6 Plus (CW+CCW) Combo", desc: "Versatile X6 Plus combo with both CW and CCW motors.", image: "/assets/motor4.jpg", price: "14,910", contact: "9876543210" }
  ],

  propeller: [
    { name: "HOBBYWING 41135 Propeller With Clamp", desc: "High quality 41135 propeller with clamp for secure attachment.", image: "/assets/propeller1.jpg", price: "6,459", contact: "9876543210" },
    { name: "HOBBYWING X8 3090 With Clamp Propeller", desc: "Durable X8 3090 propeller with clamp for reliable performance.", image: "/assets/propeller2.jpg", price: "3,499", contact: "9876543210" },
    { name: "HOBBYWING 2388 Propeller Without Clamp", desc: "Efficient 2388 propeller for various drone models.", image: "/assets/propeller3.jpg", price: "1,650", contact: "9876543210" },
    { name: "HOBBYWING Propeller Clamp", desc: "Clamp accessory for HOBBYWING propellers.", image: "/assets/propeller4.jpg", price: "890", contact: "9876543210" }
  ],



  "gps-gnss": [
    { name: "Ublox NEO-M8N GPS Module", desc: "High precision GPS for drones, fast lock, stable signal.", image: "/assets/gps1.jpg", price: "2,200", contact: "9876543210" },
    { name: "Beitian BN-880 GPS", desc: "Dual module GPS+Compass for flight controllers.", image: "/assets/gps2.jpg", price: "2,400", contact: "9876543210" },
    { name: "Matek SAM-M8Q GNSS", desc: "Multi-GNSS module, compact and reliable.", image: "/assets/gps3.jpg", price: "2,600", contact: "9876543210" }
  ],
  frames: [
    { name: "EFT E610P Agriculture Drone Frame", desc: "Durable and lightweight frame for agricultural drones.", image: "/assets/frame1.jpg", price: "44,650", contact: "9876543210" },
    { name: "EFT G06 Agriculture Drone Frame With Tank", desc: "Integrated tank and frame for efficient spraying.", image: "/assets/frame2.jpg", price: "44,650", contact: "9876543210" },
    { name: "EFT 10L Standard Tank With Battery Plate Set", desc: "10L tank and battery plate for extended operations.", image: "/assets/frame3.jpg", price: "7,450", contact: "9876543210" },
    { name: "EFT E616P Agriculture Drone Frame", desc: "Large capacity frame for professional agriculture drones.", image: "/assets/frame4.jpg", price: "66,675", contact: "9876543210" },
    { name: "FRAME", desc: "General purpose drone frame.", image: "/assets/frame5.jpg", price: "52,675", contact: "9876543210" }
  ],

  transmitter: [
    { name: "SIYI-MK15 TRANSMITTER", desc: "Professional transmitter for precise drone control.", image: "/assets/transmitter1.jpg", price: "55,275", contact: "9876543210" },
    { name: "Battery Skydroid H12 Wireless Transmitter", desc: "High-capacity wireless transmitter for extended use.", image: "/assets/transmitter2.jpg", price: "55,275", contact: "9876543210" },
    { name: "Remote Controller", desc: "Universal remote controller for multiple drone models.", image: "/assets/transmitter3.jpg", price: "33,500", contact: "9876543210" }
  ],

  camera: [
    { name: "SKYDROID Mini Camera", desc: "Compact camera for drone applications.", image: "/assets/camera1.jpg", price: "2,999", contact: "9876543210" },
    { name: "SIYI-MK15 IP CAMERA", desc: "High-resolution IP camera for SIYI-MK15.", image: "/assets/camera2.jpg", price: "2,999", contact: "9876543210" },
    { name: "SKYDROID-3IN1 CAMERA", desc: "Versatile 3-in-1 camera for multiple drone uses.", image: "/assets/camera3.jpg", price: "4,699", contact: "9876543210" },
    { name: "SKYDROID-3IN1 CAMERA", desc: "Versatile 3-in-1 camera for multiple drone uses.", image: "/assets/camera4.jpg", price: "4,699", contact: "9876543210" },
    { name: "SKYDROID-3IN1 CAMERA", desc: "Versatile 3-in-1 camera for multiple drone uses.", image: "/assets/camera5.jpg", price: "5,499", contact: "9876543210" }
  ],

  esc: [
    { name: "HOBBYWING X8 Rotor With 3011 Propeller Combo", desc: "High performance motor and propeller combo for drones.", image: "/assets/motor1.jpg", price: "14,910", contact: "9876543210" },
    { name: "HOBBYWING-X11 COMBO MOTOR", desc: "Powerful X11 combo motor for advanced drone builds.", image: "/assets/motor2.jpg", price: "31,959", contact: "9876543210" },
    { name: "HOBBYWING-X9 COMBO ROTOR", desc: "Efficient X9 combo rotor for long flight times.", image: "/assets/motor3.jpg", price: "11,193", contact: "9876543210" },
    { name: "HOBBYWING X6 Plus (CW+CCW) Combo", desc: "Versatile X6 Plus combo with both CW and CCW motors.", image: "/assets/motor4.jpg", price: "14,910", contact: "9876543210" }
  ],
  // Add other categories here
};

const ServiceCategoryPage = ({ language = 'en' }) => {
  const { category } = useParams();
  const items = categoryData[category?.toLowerCase()] || [];

  return (
    <>
      <Header language={language} />
      <main className="main-content">
        {/* Only one section title per page, above the products list */}
        <h2 className="section-title">
          {language === 'mr'
            ? `${translations[language].serviceNames?.[category] || category?.replace(/-/g, ' ')} उत्पादने`
            : `${translations[language].serviceNames?.[category] || category?.replace(/-/g, ' ')} Products`}
        </h2>
        <div className="category-products-list">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div className="category-product-card" key={idx}>
                <img src={item.image} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  {item.price && (
                    <div className="product-price" style={{ color: '#7ed957', fontWeight: 600, margin: '8px 0' }}>
                      ₹{item.price}
                    </div>
                  )}
                  {item.contact && (
                    <a
                      className="product-contact-btn"
                      href={`tel:${item.contact}`}
                      style={{
                        background: '#7ed957',
                        color: '#fff',
                        padding: '0.5rem 1.1rem',
                        borderRadius: 6,
                        fontWeight: 500,
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginTop: 4
                      }}
                    >
                      {translations[language].callNow}
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>{language === 'mr' ? 'या श्रेणीसाठी उत्पादने आढळली नाहीत.' : 'No products found for this category yet.'}</p>
          )}
        </div>
      </main>
      <Footer language={language} />
    </>
  );
};

export default ServiceCategoryPage;
