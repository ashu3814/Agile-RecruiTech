const express = require('express');
const app = express();

// Import the database configuration
require('./db/config');

// Import the router module
const router = require('./router/route');

const port = 3000;

// Parse JSON request bodies
app.use(express.json());
app.use(router);

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
