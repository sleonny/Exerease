const { WorkoutPlan } = require("../../models");

const resolvers = {
  Query: {
    workoutPlan: async (parent, { id }, context) => {
      return await WorkoutPlan.findById(id);
    },
    workoutPlans: async (parent, args, context) => {
      return await WorkoutPlan.find({});
    },
    workoutPlanByName: async (parent, { name }, context) => {
      return await WorkoutPlan.findOne({ name });
    },
  },
  Mutation: {
    addWorkoutPlan: async (
      parent,
      { name, description, muscleType, exercises, duration },
      context
    ) => {
      const newWorkoutPlan = new WorkoutPlan({
        name,
        description,
        muscleType,
        exercises,
        duration,
      });
      return await newWorkoutPlan.save();
    },
    // Add additional mutation resolvers for update and delete if needed
  },
};

module.exports = resolvers;
