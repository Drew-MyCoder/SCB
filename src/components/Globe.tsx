// src/components/Globe.tsx

import React from 'react';
// import Globe, { LabelProps } from 'react-globe.gl';
import { useSpring, animated } from 'react-spring';

interface Label {
  lat: number;
  lng: number;
  text: string;
  color: string;
}

const GlobeComponent: React.FC = () => {
  const globeOptions = {
    texture: 'path/to/your/globe-image.jpg', // Replace with your globe texture image
    enableZoom: false,
    enableRotation: true,
    autoRotateSpeed: 0.2,
    enableHover: false,
  };

  const labels: Label[] = [
    { lat: 0, lng: 0, text: 'Faith', color: 'red' },
    { lat: 20, lng: 50, text: 'Hope', color: 'green' },
    { lat: -20, lng: -50, text: 'Love', color: 'blue' },
  ];

  const labelAnimations = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Function to extract label text (correcting the type error)
  const getLabelText = (label: Label): string => {
    return label.text;
  };

  return (
    <div style={{ height: '500px', width: '100%', position: 'relative' }}>
      {/* <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        labelsData={labels}
        labelLat={(label: Label) => label.lat}
        labelLng={(label: Label) => label.lng}
        labelText={getLabelText} // Using the corrected function for labelText
        {...globeOptions}
      /> */}
    </div>
  );
};

export default GlobeComponent;
