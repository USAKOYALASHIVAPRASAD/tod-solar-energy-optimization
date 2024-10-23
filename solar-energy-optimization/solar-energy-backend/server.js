const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Define the /api/usage endpoint
app.get('/api/usage', (req, res) => {
    // Replace with your logic to get usage data
    res.json({ usage: "data_here" }); // Example response
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
