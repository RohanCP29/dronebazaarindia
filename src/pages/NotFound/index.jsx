import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Section from '../../components/layout/Section';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Section className="text-center py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Comming Soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto"
            >
              Go Back
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="w-full sm:w-auto"
            >
              Return Home
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default NotFound;
