// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Update this based on your backend URL
});

// Example function to get usage data
export const fetchUsageData = async () => {
  const response = await API.get('/usage');
  return response.data;
};

// Example function to get tariff data
export const fetchTariffData = async () => {
  const response = await API.get('/tariffs');
  return response.data;
};
