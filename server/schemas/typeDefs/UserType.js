const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    user: String
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
  }
  type Mutation {
    addUser(
      user: String!
      name: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth

    updateUser(name: String!, email: String!, password: String!): Auth
    removeUser(
      userId: ID!
      name: String!
      email: String!
      password: String!
    ): User
  }
`;

module.exports = typeDefs;
