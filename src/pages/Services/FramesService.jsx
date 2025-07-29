import React from 'react';
import ServicePage from './ServicePage';
import { framesProducts } from '../../data/serviceProducts';

export default function FramesService() {
  return <ServicePage title="Frames" products={framesProducts} />;
}
