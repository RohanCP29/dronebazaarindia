import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../../components/common/Button';
import Section from '../../components/layout/Section';

const Contact = () => {
  const { language } = useLanguage();
  
  const t = {
    en: {
      title: 'Get In Touch',
      subtitle: 'Have questions about our drone services? Send us a message and our team will get back to you shortly.',
      formTitle: 'Send us a Message',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'There was an error sending your message. Please try again.',
      contactInfo: 'Contact Information',
      address: 'Drone Bazaar, Kameri Rd, Uran Islampur, Maharashtra 415409',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      requiredField: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number'
    },
    mr: {
      title: 'आमच्याशी संपर्क साधा',
      subtitle: 'आमच्या ड्रोन सेवांबद्दल प्रश्न आहेत? आम्हाला संदेश पाठवा आणि आमची टीम लवकरच तुमच्याशी संपर्क साधेल.',
      formTitle: 'आम्हाला संदेश पाठवा',
      name: 'पूर्ण नाव',
      email: 'ईमेल पत्ता',
      phone: 'फोन नंबर',
      message: 'तुमचा संदेश',
      submit: 'संदेश पाठवा',
      submitting: 'पाठवत आहे...',
      success: 'धन्यवाद! तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे.',
      error: 'तुमचा संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
      contactInfo: 'संपर्क माहिती',
      address: '१२३ फार्म रोड, कृषी क्षेत्र, पंजाब, भारत - १४३००१',
      phoneLabel: 'फोन',
      emailLabel: 'ईमेल',
      workingHours: 'सोमवार ते शनिवार: सकाळी ९:०० ते संध्याकाळी ६:००',
      requiredField: 'हा फील्ड आवश्यक आहे',
      invalidEmail: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा',
      invalidPhone: 'कृपया वैध फोन नंबर प्रविष्ट करा'
    }
  }[language] || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    status: '' // 'success', 'error', or ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.requiredField || 'This field is required';
    }
    
    if (!formData.email) {
      newErrors.email = t.requiredField || 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.invalidEmail || 'Please enter a valid email address';
    }
    
    if (!formData.phone) {
      newErrors.phone = t.requiredField || 'This field is required';
    } else if (!/^[0-9+()\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = t.invalidPhone || 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.requiredField || 'This field is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      status: '' // Clear status when user makes changes
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would do something like:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // 
      // if (!response.ok) throw new Error('Failed to send message');
      
      // On success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        status: 'success'
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormData(prev => ({
        ...prev,
        status: 'error'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Phone />, title: language === 'mr' ? 'आम्हाला फोन करा' : 'Call Us', value: '+91 8530486629' },
    { icon: <Mail />, title: language === 'mr' ? 'आम्हाला ईमेल पाठवा' : 'Email Us', value: 'sanskarbusiness09@gmail.com' },
    { icon: <MapPin />, title: language === 'mr' ? 'आम्हाला भेट द्या' : 'Visit Us', value: t.address || 'Drone Bazaar, Kameri Rd, Uran Islampur, Maharashtra 415409' }
  ];

  return (
    <div className="bg-white">
      <Section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{t.title || 'Contact Us'}</h1>
          <p className="text-xl text-white">{t.subtitle || "We're here to help with your farming needs"}</p>
        </div>
      </Section>

      <Section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t.contactInfo || 'Contact Information'}</h2>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="p-2 bg-primary-50 rounded-lg text-primary-600 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-600">{t.workingHours || 'Monday - Saturday: 9:00 AM - 6:00 PM'}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">{t.formTitle || 'Send us a Message'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.name || 'Full Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.name || 'Your Name'}
                  className={`w-full p-3 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.email || 'Email Address'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.email || 'your.email@example.com'}
                  className={`w-full p-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.phone || 'Phone Number'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phone || 'Your Phone Number'}
                  className={`w-full p-3 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.message || 'Your Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.message || 'How can we help you?'}
                  rows="4"
                  className={`w-full p-3 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-2 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.submitting || 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t.submit || 'Send Message'}
                  </>
                )}
              </Button>
              
              {formData.status && (
                <div 
                  className={`mt-4 p-4 rounded-lg text-center transform transition-all duration-300 ${
                    formData.status === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {formData.status === 'success' ? (
                      <>
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t.success || 'Thank you! Your message has been sent.'}</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t.error || 'There was an error sending your message. Please try again.'}</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="py-0 px-0">
        <div className="relative h-96 w-full">
          <a 
            href="https://maps.app.goo.gl/EtFAGFn4U1Jo5vcm9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block"
            aria-label="Open location in Google Maps"
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {language === 'mr' ? 'गूगल मॅप्सवर पहा' : 'View on Google Maps'}
              </span>
            </div>
          </a>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.876105012936!2d76.78631431513392!3d30.51504408171715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMwJzU0LjIiTiA3NsKwNDcnMTQuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
      
      {/* Business Hours Section */}
      <Section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            {language === 'mr' ? 'आमचे कार्यकाळ' : 'Our Business Hours'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-lg mb-2">
                {language === 'mr' ? 'सोमवार - शनिवार' : 'Monday - Saturday'}
              </h3>
              <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-lg mb-2">
                {language === 'mr' ? 'रविवार' : 'Sunday'}
              </h3>
              <p className="text-gray-600">
                {language === 'mr' ? 'सुट्टी' : 'Closed'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-lg mb-2">
                {language === 'mr' ? 'करा आमची भेट' : 'Visit Us'}
              </h3>
              <p className="text-gray-600">
                {t.address || 'Drone Bazaar, Kameri Rd, Uran Islampur, Maharashtra 415409'}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'mr' 
              ? 'वारंवार विचारले जाणारे प्रश्न' 
              : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: language === 'mr' 
                  ? 'ड्रोन तंत्रज्ञान शेतीसाठी कसे उपयुक्त आहे?' 
                  : 'How can drone technology benefit my farming?',
                answer: language === 'mr'
                  ? 'ड्रोन तंत्रज्ञान शेतकऱ्यांना त्यांच्या पिकांचे निरीक्षण, मशागत आणि व्यवस्थापन करण्यास मदत करते. यामुळे पाणी, खते आणि कीटकनाशकांचा कार्यक्षम वापर होतो, उत्पादन वाढते आणि खर्च कमी होतो.'
                  : 'Drone technology helps farmers monitor, manage, and optimize their crops. It enables precise application of water, fertilizers, and pesticides, leading to increased yields and reduced costs.'
              },
              {
                question: language === 'mr'
                  ? 'ड्रोन सेवांसाठी किती आगाऊ नोंदणी आवश्यक आहे?'
                  : 'How much advance notice is required for drone services?',
                answer: language === 'mr'
                  ? 'आम्ही किमान 48 तासांची आगाऊ सूचना शिफारस करतो. तथापि, तातडीच्या गरजा असल्यास, कृपया आमच्याशी थेट संपर्क साधा आणि आम्ही शक्य तितक्या लवकर मदत करण्याचा प्रयत्न करू.'
                  : 'We recommend at least 48 hours notice for scheduling drone services. However, for urgent requirements, please contact us directly and we will try to accommodate your needs as soon as possible.'
              },
              {
                question: language === 'mr'
                  ? 'तुमच्या ड्रोन सेवांची किंमत किती आहे?'
                  : 'What is the cost of your drone services?',
                answer: language === 'mr'
                  ? 'किंमत सेवेच्या प्रकार, शेताचा आकार आणि स्थान यावर अवलंबून बदलते. अचूक किंमत अंदाजासाठी, कृपया आमच्या प्रतिनिधीशी संपर्क साधा.'
                  : 'Pricing varies depending on the type of service, farm size, and location. For an accurate quote, please contact our representative for a customized solution.'
              },
              {
                question: language === 'mr'
                  ? 'ड्रोन उडवण्यासाठी कोणते परवाने आवश्यक आहेत?'
                  : 'What licenses are required to operate drones?',
                answer: language === 'mr'
                  ? 'आमच्याकडे सर्व आवश्यक परवाने आणि प्रमाणपत्रे आहेत, यासह DGCA परवाना, ड्रोन आयडी आणि इतर कायदेशीर आवश्यकता. आमचे पायलट देखील पूर्णपणे प्रशिक्षित आणि प्रमाणित आहेत.'
                  : 'We maintain all necessary licenses and certifications, including DGCA approval, drone IDs, and other regulatory requirements. Our pilots are also fully trained and certified.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              {language === 'mr'
                ? 'तुमचा प्रश्न येथे नाही का? आमच्या कुशल प्रतिनिधींकडून मदत मिळवा.'
                : "Don't see your question here? Get help from our expert team."}
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.scrollTo({
                top: document.querySelector('form').offsetTop - 100,
                behavior: 'smooth'
              })}
            >
              {language === 'mr' ? 'आमच्याशी संपर्क साधा' : 'Contact Us Today'}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
