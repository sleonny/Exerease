 const { gql } = require('apollo-server-express');

 const typeDefs = gql`
  type User {
     _id: ID
     name: String
     email: String
     password: String
     skills: [String]!
   }

   type Auth {
     token: ID!
     profile: Profile
   }

   type Query {
        users: [Profile]!
        user(profileId: ID!): Profile
   }

   type Mutation {
      registerUser(name: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth

      addUser(userId: ID!, skill: String!): User
      addUserSkill(profileId: ID!, skill: String!): User
   }
 `;

 module.exports = typeDefs;
