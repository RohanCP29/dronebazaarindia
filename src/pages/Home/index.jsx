import React, { useState } from 'react';
import Hero from '../../components/sections/Hero';
import DroneCard from '../../components/DroneCard';
import Testimonials from '../../components/sections/Testimonials';
import CTA from '../../components/sections/CTA';
import Contact from '../../components/sections/Contact';
import ContactModal from '../../components/ContactModal';
import ServicesList from '../../components/ServicesList';

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
    name: 'SurveyPro 364',
    price: '1,20,000',
    image: '/images/drones/surveypro-364.jpg',
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

/**
 * Home page component that renders all the main sections
 * @component
 */
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-5 md:space-y-5 lg:space-y-5">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <Hero />
      </section>

      {/* Our Drones Section */}
      <section id="drones" className="mt-2 py-2 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Our Drones</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our range of advanced agricultural drones designed for Indian farmers.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {drones.map((drone, idx) => (
            <DroneCard
              key={drone.name}
              {...drone}
              onContact={() => setModalOpen(true)}
            />
          ))}
        </div>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </section>

      {/* Our Services Section */}
   
<section id="services" className="pt-0 pb-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Our Services</h2>
    <p className="text-lg text-gray-700 mb-8">
      We offer a wide range of drone-related services for modern agriculture, mapping, and more.
    </p>
  </div>
  <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2">
    <ServicesList />
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-2 bg-white">
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <CTA />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-2 bg-gray-50">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
