import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Graphs from './Graphs';
import { usageData, tariffData, savingsData, applianceData, solarData, freeHour, challenges } from './dummyData';
import Notifications from '../components/Notifications';
import Tokens from '../components/Tokens';
import '../Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState({
    graphData: { labels: [], values: [] },
    notifications: [],
    tokens: [],
    usageStats: { total: 0, peak: 0 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://improved-space-disco-59wqp7j67gwhp6g4-3000.app.github.dev/api/usage');
 // Adjust the endpoint if needed
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Using dummy data if API call fails
        setData({
          graphData: {
            labels: ["January", "February", "March", "April"],
            values: [120, 200, 150, 250],
          },
          notifications: [
            { message: "Tariff rates will change tomorrow." },
            { message: "Your battery level is low." },
          ],
          tokens: [
            { token: "abc123" },
            { token: "def456" },
          ],
          usageStats: {
            total: 500,
            peak: 100,
          },
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Solar Energy Optimization Dashboard</h1>
      <Graphs graphData={data.graphData} />
      <Notifications notifications={data.notifications} />
      <div className="usage-stats">
        <h2>Usage Statistics</h2>
        <p>Total Usage: {data.usageStats.total} kWh</p>
        <p>Peak Usage: {data.usageStats.peak} kWh</p>
      </div>
      <div className="section">
                <h2>Usage Data</h2>
                <p>Total Usage: {usageData.totalUsage} kWh</p>
                <p>Peak Usage: {usageData.peakUsage} kWh</p>
                <p>Off-Peak Usage: {usageData.offPeakUsage} kWh</p>
            </div>

            <div className="section">
                <h2>Tariff Data</h2>
                <ul>
                    {tariffData.map((tariff, index) => (
                        <li key={index}>
                            {tariff.time}: ${tariff.rate} per kWh
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2>Savings</h2>
                <p>Monthly Savings: ${savingsData.monthlySavings}</p>
                <p>Total Savings: ${savingsData.totalSavings}</p>
            </div>

            <div className="section">
                <h2>Appliance Usage</h2>
                <ul>
                    {applianceData.map((appliance, index) => (
                        <li key={index}>
                            {appliance.name}: {appliance.usage} kWh
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2>Solar Generation</h2>
                <p>Current Generation: {solarData.currentGeneration} kWh</p>
                <p>Total Generation: {solarData.totalGeneration} kWh</p>
            </div>

            <div className="section">
                <h2>Free Hour of Power</h2>
                <p>Your free hour starts at: {freeHour.start} and ends at: {freeHour.end}</p>
            </div>

            <div className="section">
                <h2>Energy Challenges</h2>
                <ul>
                    {challenges.map((challenge, index) => (
                        <li key={index}>
                            <strong>{challenge.title}</strong>: {challenge.description} - Progress: {challenge.progress}%
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  );
};

export default Dashboard;
