import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Crop, Droplets, Map, Search, Settings2 } from 'lucide-react';
import ServiceCard from '../ServiceCard';
import ContactModal from '../ContactModal';
import Button from '../common/Button';
import Section from '../layout/Section';
import ServicesList from '../ServicesList';

const Services = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContact, setModalContact] = React.useState(null);
  
  // Drone data (replace with your actual drone info)
  const drones = [
    {
      name: 'AgriDrone X1',
      price: '85,000',
      image: '/images/drones/agri-x1.jpg',
      description: 'High-precision drone for crop monitoring and spraying.',
      contact: '8530486629',
      callToBuyText: 'Call to Buy'
    },
    {
      name: 'SurveyPro 360',
      price: '1,20,000',
      image: '/images/drones/surveypro-360.jpg',
      description: 'Advanced mapping drone with 3D imaging capabilities.',
      contact: '8530486629',
      callToBuyText: 'Call to Buy'
    },
    {
      name: 'MiniSpray Lite',
      price: '65,000',
      image: '/images/drones/minispray-lite.jpg',
      description: 'Compact drone for small and mid-sized farms.',
      contact: '8530486629',
      callToBuyText: 'Call to Buy'
    }
  ];


  const content = {
    en: {
      title: 'Our Drones',
      subtitle: 'Comprehensive solutions for modern farming needs',
      cta: 'Get a Free Consultation'
    },
    mr: {
      title: 'आमचे ड्रोन्स',
      subtitle: 'आधुनिक शेतीसाठी संपूर्ण उपाय',
      cta: 'विनामूल्य सल्ला घ्या'
    }
  };

  return (
    <Section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {content[language].title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {drones.map((drone, index) => {
            const numericPrice = Number(String(drone.price).replace(/,/g, ""));
            const discount = 0.10;
            const discountedPrice = Math.round(numericPrice * (1 - discount));
            return (
              <motion.div
                key={drone.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="drone-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                  <div className="drone-img bg-primary-500 flex items-center justify-center h-40">
                    <img src={drone.image} alt={drone.name} className="h-full object-contain" />
                  </div>
                  <div className="drone-info p-6 flex flex-col flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{drone.name}</h2>
                    <p className="drone-desc text-gray-600 mb-4">{drone.description}</p>
                    <p className="drone-price mb-4">
                      Price: <span style={{ textDecoration: 'line-through', color: '#888' }}>₹{numericPrice.toLocaleString()}</span>
                      <span style={{ color: '#7ed957', fontWeight: 'bold', marginLeft: 8 }}>
                        ₹{discountedPrice.toLocaleString()} <span style={{fontSize: '0.95em', color: '#FF0000'}}>(10% OFF)</span>
                      </span>
                    </p>
                    <button
                      className="drone-contact bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition text-center"
                      onClick={() => { setModalContact(drone.contact); setModalOpen(true); }}
                    >
                      {drone.callToBuyText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

        {/* Our Services Section */}
        <ServicesList />

        <div className="mt-12 text-center">
          <Button 
            variant="accent"
            size="lg"
            onClick={() => window.location.href = '#contact'}
            className="px-8 py-3 text-lg"
          >
            {content[language].cta}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Services;
