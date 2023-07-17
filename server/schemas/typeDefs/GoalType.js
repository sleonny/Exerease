const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type WorkoutGoal {
    id: ID
    type: String
    date: String
    duration: Int

  }

<<<<<<< HEAD
  input workoutGoalInput {
=======
  input WorkoutGoalInput {
>>>>>>> c9339f65521922aef63b44a5458fb1a047020c6a
    type: String
    date: String
    duration: Int
    totalBody: String
    weight: Int
  }

  type Mutation {
<<<<<<< HEAD
    createworkoutGoal(input: workoutGoalInput!): workoutGoal
    updateworkoutGoal(id: ID!, input: workoutGoalInput!): workoutGoal
    deleteworkoutGoal(id: ID!): workoutGoal
=======
    createWorkoutGoal(input: WorkoutGoalInput!): WorkoutGoal
    updateWorkoutGoal(id: ID!, input: WorkoutGoalInput!): WorkoutGoal
    deleteWorkoutGoal(id: ID!): WorkoutGoal
>>>>>>> c9339f65521922aef63b44a5458fb1a047020c6a
  }
`;

module.exports = typeDefs;
