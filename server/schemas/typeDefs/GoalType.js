const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type WorkoutGoal {
    id: ID
    type: String
    date: String
    duration: Int
    totalBody: String
    weight: Int
  }

  type Query {
    workoutGoal(id: ID!): WorkoutGoal
    workoutGoals: [WorkoutGoal]
  }

  input WorkoutGoalInput {
    type: String
    date: String
    duration: Int
    totalBody: String
    weight: Int
  }

  type Mutation {
    createWorkoutGoal(input: WorkoutGoalInput!): WorkoutGoal
    updateWorkoutGoal(id: ID!, input: WorkoutGoalInput!): WorkoutGoal
    deleteWorkoutGoal(id: ID!): WorkoutGoal
  }
`;

module.exports = typeDefs;
