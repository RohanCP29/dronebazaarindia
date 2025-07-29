import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PlayIcon } from '@heroicons/react/24/outline';
import backImage from '../../assets/backimage.png';

const Hero = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: "Revolutionizing Agriculture with Drone Technology",
      subtitle: "Increase your farm's productivity with our advanced drone solutions for precision agriculture, crop monitoring, and efficient spraying.",
      cta1: "Get a Free Consultation",
      cta2: "Explore Our Services",
      stats: [
        { value: '50+', label: 'Happy Farmers' },
        { value: '1,000+', label: 'Acres Covered' },
        { value: '95%', label: 'Efficiency' },
        { value: '24/7', label: 'Support' },
      ]
    },
    mr: { 
      title: "ड्रोन तंत्रज्ञानाद्वारे शेतीमध्ये क्रांती",
      subtitle: "अचूक शेती, पीक निरीक्षण आणि कार्यक्षम फवारणीसाठी आमच्या प्रगत ड्रोन उपायांसह आपल्या शेतातील उत्पादकता वाढवा.",
      cta1: "विनामूल्य सल्ला घ्या",
      cta2: "आमचे सेवा पहा",
      stats: [
        { value: '५०+', label: 'समाधानी शेतकरी' },
        { value: '१,०००+', label: 'एकर क्षेत्र' },
        { value: '९५%', label: 'कार्यक्षमता' },
        { value: '२४/७', label: 'समर्थन' },
      ]
    }
  };

  const { title, subtitle, cta1, cta2, stats } = content[language];
  const [titleFirst, ...titleRest] = title.split(' ');

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDU2OTciIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-[pulse_20s_linear_infinite]"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">{titleFirst}</span>{' '}
                  <span className="block text-primary-600 xl:inline bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    {titleRest.join(' ')}
                  </span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                  {subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {cta1}
                  </motion.a>
                  <motion.a
                    href="#drones"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 border-gray-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PlayIcon className="-ml-1 mr-2 h-5 w-5 text-primary-500" aria-hidden="true" />
                    {cta2}
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative mt-12 lg:mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={backImage}
                    alt={language === 'mr' ? 'कृषी ड्रोन क्रियाशील' : 'Agricultural drone spraying crops'}
                    className="w-full h-auto rounded-lg object-cover transition-transform duration-1000 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-accent-500/5 mix-blend-overlay"></div>
                  {/* Animated pulse effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-primary-200 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                {/* Decorative animated elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/4 -right-8 w-16 h-16 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Stats */}
      <div className="relative bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="py-6 text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
