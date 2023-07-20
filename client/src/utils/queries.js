import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const GET_WORKOUT_HISTORY = gql`
  query GetWorkoutHistory($workoutHistoryId: ID!) {
    workoutHistory(id: $workoutHistoryId) {
      id
      date
      type
      duration
      calories
    }
  }
`;

export const GET_WORKOUT_GOAL = gql`
  query GetWorkoutGoal($workoutGoalId: ID!) {
    WorkoutGoal(id: $workoutGoalId) {
      id
      type
      date
      duration
    }
  }
`;

export const SEARCH_EXERCISES = gql`
  query SearchExercises($muscle: String!) {
    searchExercises(muscle: $muscle) {
      name
      type
      muscle
      equipment
      difficulty
      instructions
    }
  }
`;

export const GET_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      password
    }
  }
`;

export const GET_WORKOUTGOALS = gql`
  query GetAllWorkoutGoals {
    workoutGoals {
      id
      type
      date
      duration
    }
  }
`;
export const GET_WORKOUT_PLANS = gql`
  query GetWorkoutPlans {
    workoutPlans {
      id
      name
      description
      muscleType
      exercises
      duration
    }
  }
`;
