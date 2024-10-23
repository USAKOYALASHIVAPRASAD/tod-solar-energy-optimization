// src/components/Usage.js
import React from 'react';

const Usage = ({ data }) => {
  return (
    <div>
      <h2>Energy Usage</h2>
      <p>Total Consumption: {data.totalConsumption} kWh</p>
      <p>Peak Hours Usage: {data.peakHours.join(', ')} kWh</p>
    </div>
  );
};

export default Usage;
