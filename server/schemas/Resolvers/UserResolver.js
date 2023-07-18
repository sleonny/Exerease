const { gql } = require("apollo-server-express");
const User = require("../../models/User.js"); // Corrected import
const jwt = require("jsonwebtoken"); // import jsonwebtoken

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
      const newUser = await User.create({ user, name, email, password });

      // JWT creation
      const token = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
          user: newUser.user,
        },
        "secret", // Replace 'secret' with your secret key or environment variable
        {
          expiresIn: "24h", // token will expire in 24 hours
        }
      );

      return { user: newUser, token };

      newUser.tokens = newUser.tokens.concat({ token });
      await newUser.save();

      return { user: newUser, token };
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
