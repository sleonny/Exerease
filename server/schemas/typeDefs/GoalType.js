const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type workoutGoal {
    id: ID
    type: String
    date: String
    duration: Int

  }

  input workoutGoalInput {
    type: String
    date: String
    minlength: 1
    maxlength: 100
    duration: Int
    totalBody: String
    weight: Int
    caloriesBurned: Int
  }

  type Query {
    workoutGoal(id: ID!): WorkoutGoal
    workoutGoals: [WorkoutGoal]
  }

  type Mutation {
    createWorkoutGoal(input: WorkoutGoalInput!): WorkoutGoal
    updateWorkoutGoal(id: ID!, input: WorkoutGoalInput!): WorkoutGoal
    deleteWorkoutGoal(id: ID!): WorkoutGoal
  }
`;

module.exports = typeDefs;