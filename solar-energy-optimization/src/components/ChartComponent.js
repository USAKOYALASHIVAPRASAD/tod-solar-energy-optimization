// src/components/ChartComponent.js
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponent = ({ chartData }) => {
    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'line', // or 'bar', 'pie', etc.
            data: {
                labels: chartData.map(data => data.time), // X-axis labels
                datasets: [{
                    label: 'Energy Usage (kWh)',
                    data: chartData.map(data => data.amount), // Y-axis values
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false,
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Usage (kWh)'
                        }
                    }
                }
            }
        });

        return () => {
            myChart.destroy(); // Clean up chart instance
        };
    }, [chartData]);

    return <canvas id="myChart"></canvas>;
};

export default ChartComponent;
