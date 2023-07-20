const { WorkoutPlan } = require("../../models/WorkoutPlan.js");

const EXERCISE_API = "https://api.api-ninjas.com/v1/exercises?muscle=";

const resolvers = {
  Query: {
    workoutPlan: async (parent, { id }, context) => {
      return await WorkoutPlan.findById(id);
    },
    workoutPlans: async (parent, args, contexxt) => {
      return await WorkoutPlan.find({});
    },
  },
  WorkoutPlan: {
    exercises: async (workoutPlan, args, context) => {
      // Extract muscle type from workoutPlan
      const muscleType = workoutPlan.muscleType;
      const response = await axios.get(`${EXERCISE_API}${muscleType}`, {
        headers: {
          "X-Api-Key": process.env.API_KEY,
        },
      });

      return response.data.map((exercise) => ({
        name: exercise.name,
        description: exercise.instructions,
        sets: workoutPlan.sets,
        reps: workoutPlan.reps,
        duration: workoutPlan.duration,
      }));
    },
  },
};

module.exports = resolvers;
