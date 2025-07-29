import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, Award, Shield } from 'lucide-react';
import Section from '../../components/layout/Section';

const About = () => {
  const { language } = useLanguage();
  
  // Slideshow state
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const teamPhotos = [
    { src: '/team_s.png', alt: 'DroneBazaar India Team' },
    { src: '/team_all.jpg', alt: 'DroneBazaar India Team All' },
    { src: '/team_d.png', alt: 'DroneBazaar India Team D' }
  ];
  
  // Auto-advance slideshow every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === teamPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // 10 seconds
    
    return () => clearInterval(interval);
  }, [teamPhotos.length]);
  
  const t = {
    en: {
      heroTitle: 'Empowering Farmers with Drone Technology',
      heroSubtitle: 'Helping Indian farmers increase yields and reduce costs through innovative drone solutions',
      missionTitle: 'Our Mission',
      missionContent: 'To revolutionize Indian agriculture by providing affordable, efficient, and sustainable drone technology solutions to farmers across the country.',
      visionTitle: 'Our Vision',
      visionContent: 'We envision a future where every farmer in India has access to precision agriculture tools, enabling sustainable farming practices and food security for our nation.',
      stats: [
        { value: '50+', label: 'Happy Farmers' },
        { value: '1,000+', label: 'Acres Covered' },
        { value: '96%', label: 'Success Rate' },
        { value: '24/7', label: 'Support' }
      ],
      teamTitle: 'Our Team',
      teamSubtitle: 'Meet the experts behind DroneBazaar India',
      teamStory1: 'Founded in 2024, DroneBazaar India was born from a simple yet powerful idea: to make precision farming accessible to every farmer in India.',
      teamStory2: 'We started with a single drone and a mission to transform traditional farming practices. Today, we\'re proud to be one of India\'s leading agricultural drone service providers.',
      ctaTitle: 'Ready to transform your farming?',
      ourTeam: 'Our Team',
      ourMission: 'Our Mission',
      ourVision: 'Our Vision'
    },
    mr: {
      heroTitle: 'ड्रोन तंत्रज्ञानाद्वारे शेतकऱ्यांना सक्षम करणे',
      heroSubtitle: 'भारतीय शेतकऱ्यांना नवीन ड्रोन तंत्रज्ञानाद्वारे पीक उत्पादन वाढविण्यात आणि खर्च कमी करण्यात मदत करणे',
      missionTitle: 'आमचे ध्येय',
      missionContent: 'देशभरातील शेतकऱ्यांना किफायतशीर, कार्यक्षम आणि टिकाऊ ड्रोन तंत्रज्ञान उपाय पुरवून भारतीय शेतीमध्ये क्रांती घडवून आणणे.',
      visionTitle: 'आमची दृष्टी',
      visionContent: 'आम्ही अशी भविष्याची कल्पना करतो जिथे भारतातील प्रत्येक शेतकऱ्याला अचूक शेतीसाठीची साधने उपलब्ध असतील, ज्यामुळे टिकाऊ शेती पद्धती आणि देशासाठी अन्न सुरक्षा शक्य होईल.',
      stats: [
        { value: '५०+', label: 'समाधानी शेतकरी' },
        { value: '१,०००+', label: 'एकर क्षेत्र' },
        { value: '९६%', label: 'यशस्वी दर' },
        { value: '२४/७', label: 'आधार' }
      ],
      teamTitle: 'आमचा संघ',
      teamSubtitle: 'ड्रोनबझार इंडियाच्या तज्ञांना भेटा',
      teamStory1: '२०२४ मध्ये स्थापन झालेले ड्रोनबझार इंडिया एका साध्या पण शक्तिशाली कल्पनेतून जन्माला आले: भारतातील प्रत्येक शेतकऱ्याला अचूक शेती सुलभ करणे.',
      teamStory2: 'आम्ही एका ड्रोनसह आणि पारंपारिक शेती पद्धती बदलण्याच्या ध्येयाने सुरुवात केली. आज, आम्हाला भारतातील अग्रगण्य कृषी ड्रोन सेवा प्रदात्यांपैकी एक असल्याचा अभिमान वाटतो.',
      ctaTitle: 'तुमची शेती बदलण्यासाठी तयार आहात?',
      ourTeam: 'आमचा संघ',
      ourMission: 'आमचे ध्येय',
      ourVision: 'आमची दृष्टी'
      }
  }[language] || {};
  const stats = [
    { id: 1, value: t.stats?.[0]?.value || '500+', label: t.stats?.[0]?.label || 'Happy Farmers', icon: Users },
    { id: 2, value: t.stats?.[1]?.value || '50,000+', label: t.stats?.[1]?.label || 'Acres Covered', icon: Globe },
    { id: 3, value: t.stats?.[2]?.value || '98%', label: t.stats?.[2]?.label || 'Success Rate', icon: Award },
    { id: 4, value: t.stats?.[3]?.value || '24/7', label: t.stats?.[3]?.label || 'Support', icon: Shield },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.heroTitle || 'Empowering Farmers with Drone Technology'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {t.heroSubtitle || 'Helping Indian farmers increase yields and reduce costs through innovative drone solutions'}
          </p>
          
        </div>
      </Section>

      {/* Our Story */}
      <Section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Slideshow Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 h-[450px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPhotoIndex}
            src={teamPhotos[currentPhotoIndex].src}
            alt={teamPhotos[currentPhotoIndex].alt}
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-105"
            style={{ objectPosition: 'center' }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3">
          {teamPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhotoIndex(index)}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                index === currentPhotoIndex
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">{t.teamTitle || 'Our Team'}</h2>
        <p className="text-lg text-gray-600 mb-6">{t.teamSubtitle || 'Meet the experts behind DroneBazaar India'}</p>
        <div className="space-y-5 text-gray-700 text-base leading-relaxed">
          <p>{t.teamStory1 || 'Founded in 2024, DroneBazaar India was born from a simple yet powerful idea: to make precision farming accessible to every farmer in India.'}</p>
          <p>{t.teamStory2 || 'We started with a single drone and a mission to transform traditional farming practices. Today, we\'re proud to be one of India\'s leading agricultural drone service providers.'}</p>
        </div>
      </div>

    </div>
  </div>
</Section>


      {/* Stats */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-50 rounded-full text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.missionTitle || 'Our Mission'}</h3>
              <p className="text-gray-600 mb-6">
                {t.missionContent || 'To empower Indian farmers with accessible, affordable, and innovative drone technology.'}
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.visionTitle || 'Our Vision'}</h3>
              <p className="text-gray-600 mb-6">
                {t.visionContent || 'To be the leading force in transforming Indian agriculture through cutting-edge drone technology.'}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
