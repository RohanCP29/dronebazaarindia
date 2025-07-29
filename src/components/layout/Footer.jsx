import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import contactInfo from '../../data/contactInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  const t = {
    en: {
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contact: 'Contact Us',
      address: contactInfo.location,
      hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
      rights: `© ${currentYear} DroneBazaar India. All rights reserved.`,
      links: ['Home', 'About Us', 'Our Drones', 'Services', 'More Info', 'Privacy Policy'],
      serviceLinks: [
        'Aerial Photography', 
        'Agricultural Spraying', 
        'Surveying & Mapping', 
        'Inspections',
        'Training'
      ]
    },
    mr: {
      quickLinks: 'द्रुत दुवे',
      services: 'आमची सेवा',
      contact: 'संपर्क',
      address: contactInfo.location,
      hours: 'सोम-शनि: सकाळी ९:०० ते संध्याकाळी ५:००',
      rights: `© ${currentYear} ड्रोनबझार इंडिया. सर्व हक्क राखीव.`,
      links: ['मुख्यपृष्ठ', 'आमच्याबद्दल', 'आमचे ड्रोन', 'सेवा', 'संपर्क'],
      serviceLinks: [
        'हवाई छायाचित्रण', 
        'कृषी फवारणी', 
        'सर्वेक्षण आणि नकाशा', 
        'तपासणी',
        'प्रशिक्षण'
      ]
    }
  }[language] || {};

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img className="h-10 w-auto" src="/logo_main.png" alt="DroneBazaar India" />
              <span className="ml-2 text-xl font-bold">DroneBazaar India</span>
            </div>
            <p className="text-gray-400 max-w-xs">Empowering farmers with cutting edge drone technology.</p>
          </div>

          {/* Navigation and About in one row */}
          <div className="flex flex-wrap gap-12">
            {/* Navigation Links */}
            <div className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a 
                    href="#drones" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('drones')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                  >
                    Our Drones
                  </a>
                </li>
                <li>
                  <a 
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* About & Legal Links */}
            <div className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    More Info
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-600">{t.address}</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-600 hover:text-primary-600">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-600 hover:text-primary-600">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary-600 mr-3" />
                <p className="text-sm text-gray-600">{t.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 py-2 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
