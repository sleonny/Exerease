import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_HISTORY } from "../utils/queries"; // Make sure you define the query in the graphql/queries.js file

const WorkoutHistory = () => {
  const { loading, error, data } = useQuery(GET_WORKOUT_HISTORY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Workout History</h1>
      <h2>Workout Data</h2>
      <div>
        <h3>Exercises:</h3>
        <ul id="exercisesList">
          {data.workoutHistories.map((history) => (
            <li key={history.id}>
              <p>Date: {history.date}</p>
              <p>Type: {history.type}</p>
              <p>Duration: {history.duration}</p>
              <p>Calories: {history.calories}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutHistory;
