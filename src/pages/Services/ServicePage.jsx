import React, { useState } from 'react';
import ContactModal from '../../components/ContactModal';

const ServicePage = ({ title, products }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCallToBuy = () => {
    setModalOpen(true);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src={item.image} alt={item.name} className="mb-4 rounded h-20 w-32 object-cover" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <div className="text-lg text-primary-700 font-bold mb-2">₹{item.price}</div>
            <button
              onClick={() => handleCallToBuy(item.contact)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded mt-2"
            >
              Call to Buy
            </button>
          </div>
        ))}
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default ServicePage;
