const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Exercise {
    name: String!
    description: String
    sets: Int
    reps: Int
    duration: Int
  }

  input ExerciseInput {
    name: String!
    description: String
    sets: Int
    reps: Int
    duration: Int
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
    workoutPlanByName(name: String!): WorkoutPlan
  }

  extend type Mutation {
    addWorkoutPlan(
      name: String!
      description: String
      muscleType: String!
      exercises: [ExerciseInput]
      duration: String!
    ): WorkoutPlan
  }
`;

module.exports = typeDefs;
