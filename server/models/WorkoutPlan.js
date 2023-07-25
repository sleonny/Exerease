const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutPlan = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  muscleType: {
    type: String,
    required: false,
    trim: true,
  },
  exercises: [
    {
      name: {
        type: String,
        required: false,
        trim: true,
      },
      description: {
        type: String,
        required: false,
        trim: true,
      },
      sets: {
        type: Number,
        required: false,
      },
      reps: {
        type: Number,
        required: false,
      },
      duration: {
        type: Number,
        required: false,
      },
    },
  ],
  duration: {
    type: String,
    required: false,
  },
});

const WorkoutPlan = mongoose.model("WorkoutPlan", workoutPlan);

module.exports = WorkoutPlan;
