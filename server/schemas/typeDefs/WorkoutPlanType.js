const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Exercise {
    name: String!
    description: String
    sets: Int
    reps: Int
    duration: Int
    type: String
    muscle: String
    equipment: String
    difficulty: String
    instructions: String
  }

  type WorkoutPlan {
    id: ID!
    name: String!
    description: String
    muscleType: String!
    exercises: [Exercise]
    duration: String!
  }

  type ExternalExercise {
    name: String
    type: String
    muscle: String
    equipment: String
    difficulty: String
    instructions: String
  }

  extend type Query {
    workoutPlan(id: ID!): WorkoutPlan
    workoutPlans: [WorkoutPlan]
    searchExercises(muscle: String!): [ExternalExercise]
  }
`;

module.exports = typeDefs;
