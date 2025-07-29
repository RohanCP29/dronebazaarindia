import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import ContactModal from '../ContactModal';

const CTA = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  
  const t = {
    en: {
      title: 'Ready to Transform Your Farming with Drone Technology?',
      description: 'Join farmers increasing yields with our drone solutions.',
      button1: 'Get a Free Consultation',
      button2: 'View Our Drones',
      or: 'or',
      callText: 'Get in touch with us',
      phone: '+91 8530486629'
    },
    mr: {
      title: 'ड्रोन तंत्रज्ञानासह आपली शेती बदलायला तयार आहात?',
      description: 'आमच्या ड्रोन उपायांसह उत्पन्न वाढवणाऱ्या शेतकऱ्यांसोबत सामील व्हा.',
      button1: 'विनामूल्य सल्ला घ्या',
      button2: 'आमचे ड्रोन पहा',
      or: 'किंवा',
      callText: 'आमच्याशी संपर्क साधा',
      phone: '+91 8530486629'
    }
  }[language] || {};
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="accent" 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '#contact'}
            >
              {t.button1}
            </Button>
            <Button 
              variant="white" 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => setModalOpen(true)}
            >
              Call Us Now
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-200">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>No upfront costs</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>30-day satisfaction guarantee</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Expert support</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </section>
  );
};

export default CTA;
