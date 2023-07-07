const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutHistory = new Schema ({
    date: {
        type: Date,
        required: true, 
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    calories: {
        type: Number, 
        required: false,
    },
});

const WorkoutHistory = mongoose.model('WorkoutHistory', workoutHistory);

module.exports = WorkoutHistory;
