const { gql } = require("apollo-server-express");
const User = require("../../models/User.js"); // Corrected import





const resolvers = {
    Query: {
      
      user: async (parent, args, context) => {
        
        const { userId } = args;
        const user = await context.dataSources.getUserById(userId);
  
        return user;
      },
    },
    
    Mutation: {
      createUser: async (parent, { input }, context) => {
        return await User.create(input);
      },
      updateUser: async (parent, { id, input }, context) => {
        return await User.findByIdAndUpdate(id, input, { new: true });
      },
      deleteUser: async (parent, { id }, context) => {
        return await User.findByIdAndDelete(id);
      },
    }, 
  };
  
  module.exports = resolvers;
  
