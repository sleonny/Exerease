const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const goalType = require("./typeDefs/GoalType");
const userType = require("./typeDefs/UserType");
const workoutHistoryType = require("./typeDefs/WorkoutHistoryType");
const workoutPlanType = require("./typeDefs/WorkoutPlanType");
const contactType = require("./typeDefs/ContactType");

const typeDefs = mergeTypeDefs([
  goalType,
  userType,
  workoutHistoryType,
  workoutPlanType,
  contactType,
]);

const goalResolver = require("./Resolvers/GoalResolver");
const userResolver = require("./Resolvers/UserResolver");
const workoutHistoryResolver = require("./Resolvers/WorkoutHistoryResolver");
const workoutPlanResolver = require("./Resolvers/WorkoutPlanResolver");
const contactResolver = require("./Resolvers/ContactResolver");

const resolvers = mergeResolvers([
  goalResolver,
  userResolver,
  workoutHistoryResolver,
  workoutPlanResolver,
  contactResolver,
]);

module.exports = { typeDefs, resolvers };
