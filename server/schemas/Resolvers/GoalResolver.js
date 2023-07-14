const { gql } = require("apollo-server-express");
const { Goals } = require("../../models/Goals.js");



const resolvers = {
  Query: {
    workoutGoal: async (parent, { id }, context) => {
      return await WorkoutGoal.findById(id);
    },
    workoutGoals: async (parent, args, context) => {
      return await WorkoutGoal.find({});
    },
  },


Mutation: {
  createWorkoutGoal: async (parent, { input }, context) => {
    return await WorkoutGoal.create(input);
  },
  updateWorkoutGoal: async (parent, { id, input }, context) => {
    return await WorkoutGoal.findByIdAndUpdate(id, input, { new: true });
  },
  deleteWorkoutGoal: async (parent, { id }, context) => {
    return await WorkoutGoal.findByIdAndDelete(id);
  },
},
}  
  module.exports = resolvers;