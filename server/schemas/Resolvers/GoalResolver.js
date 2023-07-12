const { gql } = require("apollo-server-express");
const { Goals } = require("../../models/Goals.js");


const exerciseGoal_API = "https://api.api-ninjas.com/v1/exercises?type=";
const goalResolvers = {
    Query: {
      
      goals: async (parent, args, context) => {
        
        const { userId } = context;
        const goals = await context.dataSources.exerciseGoal_API.getGoalsByUserId(userId);
  
        return goals;
      },
    },

  };
  
  module.exports = goalResolvers;