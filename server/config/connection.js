const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/exerease"
);

const express = require('express');
const router = express.Router();

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
