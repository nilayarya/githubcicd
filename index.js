const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('checkout pm2 list');
});

// Define a route handler for another endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is walking on http://localhost:${port}`);
});
