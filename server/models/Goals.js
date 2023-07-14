const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutGoalSchema = new mongoose.Schema({

    userId: { 
         type: Schema.Types.ObjectId,
         ref: 'User'
         },
    goal: {
         type: String, 
         required: true,
    },
    weight: {
        type: Number,
        required: true 
        },
    totalBody: {
        type: String,
        required: true
    },
    target: { 
        type: Number, 
        required: true 
        },
    date: { 
        type: Date, 
        default: Date.now 
    },
  });
  
  const WorkoutGoals = mongoose.model('WorkoutGoals', workoutGoalSchema);

  module.exports = WorkoutGoals;
  
