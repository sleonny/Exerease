const { gql } = require("apollo-server-express");
const User = require("../../models/User.js"); // Corrected import
const jwt = require("jsonwebtoken"); // import jsonwebtoken
const bcrypt = require("bcrypt");

const userResolvers = {
  Query: {
    user: async (parent, args, context) => {
      const { userId } = args;
      const user = await User.findById(userId);
      return user;
    },

    users: async (parent, args, context) => {
      const users = await User.find({});
      return users;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }, context) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      // JWT creation
      const token = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
          username: newUser.username,
        },
        "secret", // Replace 'secret' with your secret key or environment variable
        {
          expiresIn: "24h", // token will expire in 24 hours
        }
      );

      return { user: newUser, token };
    },

    updateUser: async (parent, { id, username, email, password }, context) => {
      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : undefined;
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email, password: hashedPassword },
        { new: true }
      );

      return updatedUser;
    },

    removeUser: async (parent, { id }, context) => {
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    },

    login: async (parent, { username, password }) => {
      // find user by username
      const user = await User.findOne({ username });

      // user doesn't exist, throw an error
      if (!user) {
        throw new Error("No user found with this username");
      }

      // user exists, check password
      const correctPw = await bcrypt.compare(password, user.password);

      // password is incorrect, throw an error
      if (!correctPw) {
        throw new Error("Incorrect credentials");
      }

      // password is correct, issue a token
      const token = jwt.sign({ id: user._id }, "your_secret_key", {
        expiresIn: "24h",
      });

      return { token, user };
    },
  },
};

module.exports = userResolvers;
