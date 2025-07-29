import React from 'react';
import ServicePage from './ServicePage';
import { gpsProducts } from '../../data/serviceProducts';

export default function GpsService() {
  return <ServicePage title="GPS" products={gpsProducts} />;
}
