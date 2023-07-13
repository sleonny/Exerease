const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type workoutGoal {
    id: ID
    type: String
    date: String
    duration: Int

  }

  input workOutGoals {
    type: String
    date: String
    minlength: Int
    maxlength: Int
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
    createWorkoutGoal(input: workOutGoals!): WorkoutGoal
    updateWorkoutGoal(id: ID!, input: WorkOutGoals!): WorkoutGoal
    deleteWorkoutGoal(id: ID!): WorkoutGoal
  }
`;

module.exports = typeDefs;