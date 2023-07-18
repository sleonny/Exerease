const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type WorkoutGoal {
    id: ID
    type: String
    date: String
    duration: Int
  }

  input WorkoutGoalInput {
    type: String
    date: String
    duration: Int
    totalBody: String
    weight: Int
  }

  type Query {
    WorkoutGoal(id: ID!): WorkoutGoal
    workoutGoals: [WorkoutGoal]
  }

  type Mutation {
    createworkoutGoal(input: WorkoutGoalInput!): WorkoutGoal
    updateworkoutGoal(id: ID!, input: WorkoutGoalInput!): WorkoutGoal
    deleteworkoutGoal(id: ID!): WorkoutGoal
  }
`;

module.exports = typeDefs;
