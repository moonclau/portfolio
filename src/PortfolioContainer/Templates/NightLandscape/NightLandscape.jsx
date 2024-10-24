import React from 'react';
import './NightLandscape.css';

const NightLandscape = () => {
  return (
    <div className="night-sky">
      {/* flashes to simulate fireflies */}
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </div>
  );
};

export default NightLandscape;
