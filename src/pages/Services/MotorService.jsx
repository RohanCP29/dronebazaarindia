import React from 'react';
import ServicePage from './ServicePage';
import { motorProducts } from '../../data/serviceProducts';

export default function MotorService() {
  return <ServicePage title="Motor" products={motorProducts} />;
}
