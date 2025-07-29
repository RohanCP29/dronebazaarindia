import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Drones', href: '/#drones' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const translations = {
  en: {
    home: 'Home',
    drones: 'Drones',
    services: 'Services',
    about: 'About',
    contact: 'More Info',
    getQuote: 'Get In Touch',
    menu: 'Menu'
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    drones: 'ड्रोन्स',
    services: 'सेवा',
    about: 'आमच्याबद्दल',
    contact: 'अधिक माहिती',
    getQuote: 'संपर्क करा',
    menu: 'मेनू'
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const getTranslatedText = (key) => translations[language]?.[key] || key;

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }
    if (href.startsWith('/#')) {
      const section = href.split('#')[1];
      if (location.pathname === '/') {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo_main.png"
              alt="DroneBazaar India Logo"
              className="h-10 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo512.png';
              }}
            />
            <span className="text-xl font-bold text-primary-800 hidden sm:inline-block">
              DroneBazaar India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium bg-transparent border-none outline-none cursor-pointer ${
                  (location.pathname === item.href || (item.href.startsWith('/#') && location.pathname === '/' && window.location.hash === item.href.replace('/', '')))
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                style={{ background: 'none' }}
              >
                {getTranslatedText(item.name.toLowerCase())}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 ml-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleLanguage}
                className="min-w-[80px]"
              >
                {language === 'en' ? 'मराठी' : 'English'}
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={scrollToContact}
              >
                {getTranslatedText('getQuote')}
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="!px-2 !py-1 text-xs"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">{getTranslatedText('menu')}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 w-full text-left bg-transparent border-none outline-none cursor-pointer"
              style={{ background: 'none' }}
            >
              {getTranslatedText(item.name.toLowerCase())}
            </button>
          ))}
          <div className="border-t border-gray-200 px-4 py-3">
            <Button 
              variant="primary" 
              size="md" 
              className="w-full"
              onClick={scrollToContact}
            >
              {getTranslatedText('getQuote')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
