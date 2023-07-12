const mongoose = require("mongoose");
require('dotenv').config();

const MONGODB_URI = process.env.MONGOURI;


mongoose.connect(MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

module.exports = mongoose.connection
