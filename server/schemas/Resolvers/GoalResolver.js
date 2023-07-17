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
    createworkoutGoal: async (parent, { input }, context) => {
      return await WorkoutGoal.create(input);
    },
    updateworkoutGoal: async (parent, { id, input }, context) => {
      return await WorkoutGoal.findByIdAndUpdate(id, input, { new: true });
    },
    deleteworkoutGoal: async (parent, { id }, context) => {
      return await WorkoutGoal.findByIdAndDelete(id);
    },
  },
};
module.exports = resolvers;
