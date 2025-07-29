import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  const t = {
    en: {
      title: 'How would you like to contact us?',
      contactOption: 'Call Us',
      whatsappOption: 'WhatsApp',
      phoneNumber: '+91 8530486629',
      whatsappNumber: '+91 8530486629',
      close: 'Close'
    },
    mr: {
      title: 'आमच्याशी कसे संपर्क साधायचे?',
      contactOption: 'आम्हाला कॉल करा',
      whatsappOption: 'व्हॉट्सअॅप',
      phoneNumber: '+91 8530486629',
      whatsappNumber: '+91 8530486629',
      close: 'बंद करा'
    }
  }[language] || {};

  const handleCall = () => {
    window.location.href = `tel:${t.phoneNumber}`;
    onClose();
  };

  const handleWhatsApp = () => {
    const message = language === 'mr' 
      ? 'नमस्कार! मला ड्रोन तंत्रज्ञानाबद्दल माहिती हवी आहे.'
      : 'Hello! I would like to know more about drone technology.';
    const whatsappUrl = `https://wa.me/${t.whatsappNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {t.title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Call Option */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCall}
                className="w-full flex items-center justify-center gap-3 p-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">{t.contactOption}</span>
              </motion.button>

              {/* WhatsApp Option */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">{t.whatsappOption}</span>
              </motion.button>
            </div>

            {/* Phone Number Display */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {t.phoneNumber}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
