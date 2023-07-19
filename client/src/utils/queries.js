import { gql } from '@apollo/client';

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
  query WorkoutHistory($workoutHistoryId: ID!) {
  workoutHistory(id: $workoutHistoryId) {
    id
    date
    type
    duration
    calories
  }
}
`
