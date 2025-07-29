import React from 'react';
import ServicePage from './ServicePage';
import { batteryProducts } from '../../data/serviceProducts';

export default function BatteryService() {
  return <ServicePage title="Battery" products={batteryProducts} />;
}
