import React from 'react';
import ServicePage from './ServicePage';
import { propellerProducts } from '../../data/serviceProducts';

export default function PropellerService() {
  return <ServicePage title="Propeller" products={propellerProducts} />;
}
