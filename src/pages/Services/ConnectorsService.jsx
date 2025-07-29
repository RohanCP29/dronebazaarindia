import React from 'react';
import ServicePage from './ServicePage';
import { connectorsProducts } from '../../data/serviceProducts';

export default function ConnectorsService() {
  return <ServicePage title="Connectors" products={connectorsProducts} />;
}
