import React from 'react';
import ServicePage from './ServicePage';
import { cameraProducts } from '../../data/serviceProducts';

export default function CameraService() {
  return <ServicePage title="Camera" products={cameraProducts} />;
}
