import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = {
    en: {
      title: 'Privacy Policy',
      content: 'This is the privacy policy content. Replace this with your actual privacy policy text.'
    },
    mr: {
      title: 'गोपनीयता नीति',
      content: 'ही गोपनीयता धोरण सामग्री आहे. हे आपल्या वास्तविक गोपनीयता धोरण मजकूरासह पुनर्स्थित करा.'
    }
  }[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <div className="prose max-w-4xl">
        <p>{t.content}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
