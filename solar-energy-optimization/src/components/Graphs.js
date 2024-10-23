import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Graphs = ({ graphData }) => {
  const data = {
    labels: graphData.labels,
    datasets: [
      {
        label: 'Energy Usage',
        data: graphData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="graphs">
      <h2>Graphs</h2>
      <Bar data={data} />
    </div>
  );
};

export default Graphs;
