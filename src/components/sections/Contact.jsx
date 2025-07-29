import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../common/Button';
import Section from '../layout/Section';

const Contact = () => {
  const { language } = useLanguage();
  
  const t = {
    en: {
      title: 'Get In Touch',
      subtitle: 'Have questions about our drone services? Send us a message and our team will get back to you shortly.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      service: 'Service Interested In',
      message: 'Your Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'There was an error sending your message. Please try again.',
      contactInfo: 'Contact Information',
      address: 'Drone Bazaar, Kameri Rd, Uran Islampur, Maharashtra 415409',
      hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      services: {
        default: 'Select a service',
        precision: 'Precision Agriculture',
        spraying: 'Smart Spraying',
        mapping: 'Field Mapping',
        scouting: 'Crop Scouting',
        custom: 'Custom Solutions'
      }
    },
    mr: {
      title: 'आमच्याशी संपर्क साधा',
      subtitle: 'आमच्या ड्रोन सेवांबद्दल प्रश्न आहेत? आम्हाला संदेश पाठवा आणि आमची टीम लवकरच तुमच्याशी संपर्क साधेल.',
      name: 'पूर्ण नाव',
      email: 'ईमेल पत्ता',
      phone: 'फोन नंबर',
      service: 'सेवा निवडा',
      message: 'तुमचा संदेश',
      submit: 'संदेश पाठवा',
      submitting: 'पाठवत आहे...',
      success: 'धन्यवाद! तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे.',
      error: 'तुमचा संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
      contactInfo: 'संपर्क माहिती',
      address: '१२३ फार्म रोड, कृषी क्षेत्र, पंजाब, भारत - १४३००१',
      hours: 'सोमवार ते शनिवार: सकाळी ९:०० ते संध्याकाळी ६:००',
      services: {
        default: 'सेवा निवडा',
        precision: 'अचूक शेती',
        spraying: 'स्मार्ट फवारणी',
        mapping: 'शेत नकाशे',
        scouting: 'पीक तपासणी',
        custom: 'सानुकूल उपाय'
      }
    }
  }[language] || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-12">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {t.contactInfo}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 p-2 rounded-lg text-primary-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="text-base text-gray-900">+91 8530486629</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 p-2 rounded-lg text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-base text-gray-900">sanskarbusiness09@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 p-2 rounded-lg text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Office</h4>
                    <p className="text-base text-gray-900">Drone Bazaar, Kameri Rd, Uran Islampur</p>
                    <p className="text-sm text-gray-500">Maharashtra, India - 143001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                {[
                  'Expert drone technology for agriculture',
                  'Custom solutions for your farm',
                  'Affordable and efficient services',
                  'Experienced team of professionals',
                  '24/7 customer support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              {submitStatus ? (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+91 8530486629"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                    >
                      <option value="">{t.services.default}</option>
                      <option value="precision-agriculture">{t.services.precision}</option>
                      <option value="smart-spraying">{t.services.spraying}</option>
                      <option value="field-mapping">{t.services.mapping}</option>
                      <option value="crop-scouting">{t.services.scouting}</option>
                      <option value="custom-solutions">{t.services.custom}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t.submit}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
