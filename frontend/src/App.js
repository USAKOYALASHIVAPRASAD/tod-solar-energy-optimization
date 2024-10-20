import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [predictions, setPredictions] = useState("");

    useEffect(() => {
        axios.get('/api/realtime-data')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleGetPredictions = () => {
        const energyUsage = { "energy_usage": data.energy_consumption };
        axios.post('/api/get-predictions', energyUsage)
            .then(res => setPredictions(res.data.predictions))
            .catch(err => console.log(err));
    };

    return (
        <div className="App">
            <h1>Solar Energy Dashboard</h1>
            <div>
                <h2>Real-Time Data</h2>
                <p>Solar Production: {data.solar_production} kW</p>
                <p>Energy Consumption: {data.energy_consumption} kW</p>
            </div>
            <div>
                <h2>Predictions</h2>
                <button onClick={handleGetPredictions}>Get Predictions</button>
                <p>{predictions}</p>
            </div>
        </div>
    );
}

export default App;
