import React from 'react';
import ServicePage from './ServicePage';
import { flightControllerProducts } from '../../data/serviceProducts';

export default function FlightControllerService() {
  return <ServicePage title="Flight Controller" products={flightControllerProducts} />;
}
