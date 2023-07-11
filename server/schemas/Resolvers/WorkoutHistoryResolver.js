const { WorkoutHistory } = require("../../models/WorkoutHistory.js");

const resolvers = {
  Query: {
    workoutHistory: async (parent, { id }, context) => {
      return await WorkoutHistory.findById(id);
    },
    wokroutHistories: async (parent, args, context) => {
      return await WorkoutHistory.find({});
    },
  },

  Mutation: {
    createWorkoutHistory: async (parent, { input }, context) => {
      return await WorkoutHistory.create(input);
    },
    updateWorkoutHistory: async (parent, { id, input }, context) => {
      return await WorkoutHistory.findByIdAndUpdate(id, input, { new: true });
    },
    deleteWorkoutHistory: async (parent, { id }, context) => {
      return await WorkoutHistory.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
