const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type ContactUs {
    name: String!
    email: String!
    phone: String
    message: String!
    date: String!
  }

  type Query {
    getContactUsForms: [ContactUs]
  }

  type Mutation {
    submitContactUsForm(
      name: String!
      email: String!
      phone: String
      message: String!
    ): ContactUs
  }
`;

module.exports = typeDefs;
