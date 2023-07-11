const { mergeTypeDefs } = require("@apollo/client");

const goalType = require("./typeDefs/GoalType");
const userType = require("./typeDefs/UserType");
const workoutHistoryType = require("./typeDefs/WorkoutHistoryType");
const workoutPlanType = require("./typeDefs/WorkoutPlanType");

const typeDefs = mergeTypeDefs([
  goalType,
  userType,
  workoutHistoryType,
  workoutPlanType,
]);

const { mergeResolvers } = require("@graphql-tools/merge");

const goalResolver = require("./Resolvers/GoalResolver");
const userResolver = require("./Resolvers/GoalResolver");
const workoutHistoryResolver = require("./Resolvers/WorkoutHistoryResolver");
const workoutPlanResolver = require("./Resolvers/WorkoutPlanResolver");

const resolvers = mergeResolvers([
  goalResolver,
  userResolver,
  workoutHistoryResolver,
  workoutPlanResolver,
]);

module.exports = { typeDefs, resolvers };
