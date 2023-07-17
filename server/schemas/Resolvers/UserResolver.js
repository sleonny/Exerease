const { gql } = require("apollo-server-express");
const User = require("../../models/User.js"); // Corrected import





const userResolvers = {
    Query: {
      
      user: async (parent, args, context) => {
        
        const { userId } = args;
        const user = await context.dataSources.getUserById(userId);
  
        return user;
      },
    },
    
  };
  
  module.exports = userResolvers;
  
