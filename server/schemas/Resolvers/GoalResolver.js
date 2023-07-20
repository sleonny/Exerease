const { gql } = require("apollo-server-express");
const { workoutGoals } = require("../../models/Goals.js");

const resolvers = {
  Query: {
    WorkoutGoal: async (parent, { id }, context) => {
      return await WorkoutGoals.findById(id);
    },
    workoutGoals: async (parent, args, context) => {
      return await WorkoutGoals.find({});
    },
  },

  Mutation: {
    createworkoutGoal: async (parent, { input }, context) => {
      return await WorkoutGoals.create(input);
    },
    updateworkoutGoal: async (parent, { id, input }, context) => {
      return await WorkoutGoals.findByIdAndUpdate(id, input, { new: true });
    },
    deleteworkoutGoal: async (parent, { id }, context) => {
      return await WorkoutGoals.findByIdAndDelete(id);
    },
  },
};
module.exports = resolvers;







