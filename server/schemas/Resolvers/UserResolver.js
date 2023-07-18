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
  Mutation: {
    addUser: async (parent, { user, name, email, password }, context) => {
      return await User.create({ user, name, email, password });
    },
    updateUser: async (parent, { id, input }, context) => {
      return await User.findByIdAndUpdate(id, input, { new: true });
    },
    removeUser: async (parent, { id }, context) => {
      return await User.findByIdAndDelete(id);
    },
  },
};

module.exports = userResolvers;
