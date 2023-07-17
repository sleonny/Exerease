const { gql } = require("apollo-server-express");
const User = require("../../models/User.js"); // Corrected import

<<<<<<< HEAD
const userResolvers = {
=======
const resolvers = {
>>>>>>> main
  Query: {
    user: async (parent, args, context) => {
      const { userId } = args;
      const user = await context.dataSources.getUserById(userId);

      return user;
    },
  },
<<<<<<< HEAD
};

module.exports = userResolvers;
=======

  Mutation: {
    addUser: async (parent, { input }, context) => {
      return await User.create(input);
    },
    updateUser: async (parent, { id, input }, context) => {
      return await User.findByIdAndUpdate(id, input, { new: true });
    },
    removeUser: async (parent, { id }, context) => {
      return await User.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
>>>>>>> main
