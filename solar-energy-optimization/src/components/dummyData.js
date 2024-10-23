// src/dummyData.js
export const usageData = {
    totalUsage: 150, // in kWh
    peakUsage: 80,   // in kWh
    offPeakUsage: 70, // in kWh
    month: 'October 2024',
};

export const tariffData = [
    { time: '00:00 - 06:00', rate: 0.05 },
    { time: '06:00 - 12:00', rate: 0.15 },
    { time: '12:00 - 18:00', rate: 0.20 },
    { time: '18:00 - 24:00', rate: 0.25 },
];

export const savingsData = {
    monthlySavings: 20,
    totalSavings: 200,
};

export const notifications = [
    "Your free hour of power starts at 14:00!",
    "High tariff period is approaching.",
];

export const applianceData = [
    { name: 'Washing Machine', usage: 2 }, // kWh
    { name: 'Dishwasher', usage: 1.5 },
    { name: 'Refrigerator', usage: 0.5 },
];

export const solarData = {
    currentGeneration: 5, // in kWh
    totalGeneration: 100, // in kWh
};

export const freeHour = {
    start: '14:00',
    end: '15:00',
};

export const challenges = [
    { title: "Energy Saving Challenge", description: "Save 10% of your monthly usage!", progress: 30 }, // in %
    { title: "Community Challenge", description: "Compete with your neighbors!", progress: 60 },
];
