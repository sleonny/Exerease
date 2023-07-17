const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type workoutGoal {
    id: ID
    type: String
    date: String
    duration: Int
    totalBody: String
    weight: Int
  }

  type Query {
    workoutGoal(id: ID!): workoutGoal
    workoutGoals: [workoutGoal]
  }

  input workoutGoalInput {
    type: String
    date: String
    duration: Int
    totalBody: String
    weight: Int
  }

  type Mutation {
    createworkoutGoal(input: workoutGoalInput!): workoutGoal
    updateworkoutGoal(id: ID!, input: workoutGoalInput!): workoutGoal
    deleteworkoutGoal(id: ID!): workoutGoal
  }
`;

module.exports = typeDefs;
