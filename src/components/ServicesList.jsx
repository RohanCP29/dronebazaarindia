import React from 'react';
import {
  BatteryFull, Cpu, Settings, RotateCcw, Camera,
  Square, Plug, Satellite, Cable
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: <BatteryFull className="h-8 w-8 text-white" />,
    title: 'Battery',
    description: 'Power-packed performance for longer flight times.',
    features: ['Smart charging', 'Thermal protection', 'Energy-efficient']
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: 'Flight Controller',
    description: 'Precision navigation & control at your fingertips.',
    features: ['AI-driven paths', 'Failsafe logic', 'Real-time telemetry']
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: 'Motor',
    description: 'Reliable motors for stable and efficient flight.',
    features: ['Low noise', 'High torque', 'Weather-resistant']
  },
  {
    icon: <RotateCcw className="h-8 w-8 text-white" />,
    title: 'Propeller',
    description: 'Aerodynamic blades for optimized lift and balance.',
    features: ['Carbon fiber', 'Auto-lock', 'High RPM']
  },
  {
    icon: <Camera className="h-8 w-8 text-white" />,
    title: 'Camera',
    description: 'Capture stunning visuals with high-res drone cameras.',
    features: ['4K video', 'Stabilized gimbal', 'Zoom lens']
  },
  {
    icon: <Square className="h-8 w-8 text-white" />,
    title: 'Frames',
    description: 'Durable frames built for endurance and payloads.',
    features: ['Lightweight', 'Modular design', 'Crash-resistant']
  },
  {
    icon: <Plug className="h-8 w-8 text-white" />,
    title: 'Connectors',
    description: 'Secure electrical connections for every component.',
    features: ['Weatherproof', 'Universal fit', 'Locking clips']
  },
  {
    icon: <Satellite className="h-8 w-8 text-white" />,
    title: 'GPS',
    description: 'Track your drone in real-time with high-accuracy GPS.',
    features: ['RTK support', 'Live tracking', 'Geo-fencing']
  },
  {
    icon: <Cable className="h-8 w-8 text-white" />,
    title: 'Wires',
    description: 'Premium wiring for seamless power and data flow.',
    features: ['Copper core', 'Shielded', 'Flexible routing']
  }
];

// Animation keyframes
const sliderKeyframes = `
@keyframes scroll-x-services {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.services-slider:hover {
  animation-play-state: paused !important;
}
.services-card {
  position: relative;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
  will-change: transform;
  height: 100%;
  backface-visibility: hidden;
}
.services-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  border-radius: inherit;
  z-index: -1;
  transition: inherit;
}
.services-card:hover {
  transform: scale(1.05);
  z-index: 20;
}
.services-card:hover::before {
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  filter: brightness(1.05);
}
.services-card-container {
  perspective: 1000px;
  height: 100%;
  padding: 1rem 0;
}
`;

const ServicesList = () => {
  const navigate = useNavigate();

  const pathMap = {
    'battery': '/services/battery',
    'flight controller': '/services/flight-controller',
    'motor': '/services/motor',
    'propeller': '/services/propeller',
    'camera': '/services/camera',
    'frames': '/services/frames',
    'connectors': '/services/connectors',
    'gps': '/services/gps',
    'wires': '/services/wires',
  };

  return (
    <div className="mt-16 relative">
      <style>{sliderKeyframes}</style>

      <div className="overflow-hidden w-full">
        <div
          className="flex min-w-max services-slider"
          style={{
            animation: 'scroll-x-services 40s linear infinite',
            width: '200%',
          }}
        >
          {[...services, ...services].map((service, idx) => {
            const path = pathMap[service.title.toLowerCase()];
            return (
              <div key={service.title + idx} className="services-card-container mx-4 min-w-[260px] max-w-xs">
                <div
                  className="services-card bg-gradient-to-br from-primary-600 to-primary-800 text-white p-6 rounded-xl shadow-md flex flex-col items-center justify-start h-full cursor-pointer hover:ring-4 ring-primary-300"
                  onClick={() => navigate(path)}
                >
                  <div className="bg-primary-500 rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 capitalize">{service.title}</h3>
                  <p className="text-sm text-primary-100 mb-4 text-center leading-relaxed">{service.description}</p>
                  <ul className="text-sm space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
