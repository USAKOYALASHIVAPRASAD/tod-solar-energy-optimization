// src/components/Budget.js
import React from 'react';

const Budget = ({ data }) => {
  return (
    <div>
      <h2>Energy Budget</h2>
      <p>Current Usage: {data.currentUsage} kWh</p>
      <p>Budget: {data.budget} kWh</p>
    </div>
  );
};

export default Budget;
