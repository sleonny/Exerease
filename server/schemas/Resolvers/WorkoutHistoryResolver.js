const { WorkoutHistory } = require("../../models/WorkoutHistory.js");

const resolvers = {
  Query: {
    workoutHistory: async (parent, { id }, context) => {
      return await WorkoutHistory.findById(id);
    },
    workoutHistories: async (parent, args, context) => {
      return await WorkoutHistory.find({});
    },
  },

  Mutation: {
    createworkoutHistory: async (parent, { input }, context) => {
      return await WorkoutHistory.create(input);
    },
    updateworkoutHistory: async (parent, { id, input }, context) => {
      return await WorkoutHistory.findByIdAndUpdate(id, input, { new: true });
    },
    deleteworkoutHistory: async (parent, { id }, context) => {
      return await WorkoutHistory.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
