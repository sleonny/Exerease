import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_WORKOUT_HISTORY } from "../utils/queries";

const WorkoutHistory = () => {
  const { loading, error, data } = useQuery(GET_WORKOUT_HISTORY);

  
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Workout History</h1>
      <h2 style={{ marginBottom: "10px" }}>Workout Data</h2>
      <div style={{ marginBottom: "20px" }}>
        <h3>Exercises:</h3>
        <ul id="exercisesList" style={{ listStyle: "none", padding: 0 }}>
          {data.workoutHistories.map((history) => (
            <li
              key={history.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p><strong>Date:</strong> {history.date}</p>
              <p><strong>Type:</strong> {history.type}</p>
              <p><strong>Duration:</strong> {history.duration}</p>
              <p><strong>Calories:</strong> {history.calories}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutHistory;
