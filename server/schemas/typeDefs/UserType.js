const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addUser(userId: ID!, name: String!, email: String!, password: String!): User
    removeUser(
      userId: ID!
      name: String!
      email: String!
      password: String!
    ): User
  }
`;

module.exports = typeDefs;
