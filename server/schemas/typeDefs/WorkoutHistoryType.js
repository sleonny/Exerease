const { gql } = require("apollo-server-express");

const typeDefts = gql`
  type WorkoutHistory {
    id: ID
    date: String
    type: String
    duration: Int
    calories: Int
  }

  input WorkoutHistoryInput {
    date: String
    type: String
    duration: Int
    calories: Int
  }

  type Query {
    workoutHistory(id: ID!): WorkoutHistory
    workoutHistories: [WorkoutHistory]
  }

  type Mutation {
    createWorkoutHistory(input: WorkoutHistoryInput!): WorkoutHistory
    updateWorkoutHistory(id: ID!, input: WorkoutHistoryInput!): WorkoutHistory
    deleteWorkoutHistory(id: ID!): WorkoutHistory
  }
`;

module.exports = typeDefs;
