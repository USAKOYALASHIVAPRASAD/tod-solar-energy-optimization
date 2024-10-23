// src/components/Alerts.js
import React from 'react';

const Alerts = ({ alerts }) => {
  return (
    <div>
      <h2>Alerts</h2>
      {alerts.map((alert, index) => (
        <div key={index}>
          <p>{alert.message} at {alert.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
