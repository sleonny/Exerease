const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://4000/excereaseDB');

module.exports = mongoose.connection;
