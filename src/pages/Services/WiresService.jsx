import React from 'react';
import ServicePage from './ServicePage';
import { wiresProducts } from '../../data/serviceProducts';

export default function WiresService() {
  return <ServicePage title="Wires" products={wiresProducts} />;
}
