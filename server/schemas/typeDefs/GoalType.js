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
    workoutGoal(id: ID!): WorkoutGoal
    workoutGoals: [WorkoutGoal]
  }

  input workoutGoalInput{
    type: String
    date: String
    duration:Int
    totalBody: String
    weight: Int
  }

  type Mutation {
    createWorkoutGoal(input: workOutGoalInput!): workoutGoal
    updateWorkoutGoal(id: ID!, input: workoutGoalInput!): workoutGoal
    deleteWorkoutGoal(id: ID!): workoutGoal
  }
`;

module.exports = typeDefs;