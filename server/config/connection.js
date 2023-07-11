const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://4000/exereaseDB"
);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 4000');
});
// Example route to retrieve data from MongoDB
router.get('/data', (req, res) => {
  // Use your Mongoose model to fetch data from MongoDB
  YourModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Register the router with the app
app.use('/api', router);
module.exports = mongoose.connection;
