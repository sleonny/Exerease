import { gql } from '@apollo/client';

// Mutations for adding and logging in a profile
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($user: String!, $name: String!, $email: String!, $password: String!) {
    addUser(user: $user, name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const GET_WORKOUT_HISTORY = gql`
  mutation CreateWorkoutHistory($input: WorkoutHistoryInput!) {
    createWorkoutHistory(input: $input) {
      id
      date
      type
      duration
      calories
    }
  }
`;

export const GET_WORKOUT_GOAL = gql`
  mutation CreateWorkoutGoal($input: WorkoutGoalInput!) {
    createworkoutGoal(input: $input) {
      id
      type
      date
      duration
    }
  }
`;

export const DELETE_WORKOUT_HISTORY = gql`
  mutation DeleteWorkoutHistory($id: ID!) {
    deleteWorkoutHistory(id: $id) {
      id
      date
      type
      duration
      calories
    }
  }
`;

export const DELETE_WORKOUT_GOAL = gql`
  mutation DeleteWorkoutGoal($id: ID!) {
    deleteworkoutGoal(id: $id) {
      id
      type
      date
      duration
    }
  }
`;

// Mutations for updating user, workout history, and workout goal
export const UPDATE_WORKOUT_HISTORY = gql`
  mutation UpdateWorkoutHistory($id: ID!, $input: WorkoutHistoryInput!) {
    updateWorkoutHistory(id: $id, input: $input) {
      id
      date
      type
      duration
      calories
    }
  }
`;

export const UPDATE_WORKOUT_GOAL = gql`
  mutation UpdateWorkoutGoal($id: ID!, $input: WorkoutGoalInput!) {
    updateworkoutGoal(id: $id, input: $input) {
      id
      type
      date
      duration
    }
  }
`;

// Mutation for removing a user
export const REMOVE_USER = gql`
  mutation RemoveUser($userId: ID!, $name: String!, $email: String!, $password: String!) {
    removeUser(userId: $userId, name: $name, email: $email, password: $password) {
      _id
      user
      name
      email
      password
    }
  }
`;
