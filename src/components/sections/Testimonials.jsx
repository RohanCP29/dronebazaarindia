import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../common/Button';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Farmer, Punjab',
    image: '/images/testimonials/farmer1.jpg',
    content: 'Using drone technology has reduced our pesticide usage by 30% while increasing our yield. The detailed field reports help us make better decisions.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Farm Owner, Maharashtra',
    image: '/images/testimonials/farmer2.jpg',
    content: 'The crop health monitoring service helped us detect a fungal infection early. We were able to treat it before it spread, saving our entire season\'s harvest.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Agricultural Entrepreneur, Gujarat',
    image: '/images/testimonials/farmer3.jpg',
    content: 'The precision spraying service is a game-changer. We\'ve cut down on chemical costs and our crops have never been healthier. The team is very professional.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sunita Devi',
    role: 'Organic Farmer, Uttar Pradesh',
    image: '/images/testimonials/farmer4.jpg',
    content: 'As an organic farmer, I was skeptical about using technology, but the drone-based soil analysis helped us improve our organic matter content significantly.',
    rating: 5
  }
];

const Testimonials = () => {
  const { language } = useLanguage();
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {language === 'mr' ? 'शेतकरी काय म्हणतात' : 'What Farmers Are Saying'}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {language === 'mr' 
            ? 'आमच्या ड्रोन उपायांसह आपली शेती पद्धत बदललेल्या शेतकऱ्यांकडून ऐका.'
            : 'Hear from farmers who have transformed their agricultural practices with our drone technology.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:bg-green-50 cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="relative flex-grow mb-6">
                <Quote className="absolute -top-2 -left-2 text-gray-200 w-8 h-8 -z-10" />
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-500">Verified User</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Join hundreds of farmers who are already benefiting from our drone services.
        </p>
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => window.location.href = '#contact'}
        >
          Start Your Journey Today
        </Button>
      </div>
    </Section>
  );
};

export default Testimonials;
