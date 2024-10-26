const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle JSON data
app.use(express.json());

// starter route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
