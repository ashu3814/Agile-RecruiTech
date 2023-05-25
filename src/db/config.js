const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose
  .connect('mongodb://127.0.0.1:27017/event', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Connection successful
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    // Connection failed
    console.log('Error connecting to MongoDB:', error);
  });
