import React, { useState, useEffect } from "react";

function WorkoutHistoryPage() {
  const [workoutHistory, setWorkoutHistory] = useState([]);
  useEffect(() => {
  }, []);
  const handleSelectWorkoutHistory = (selectedWorkout) => {
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "2rem" }}>
      <h1>Workout History</h1>
      <div>
        {workoutHistory.map((workout) => (
          <div
            key={workout.id}
            onClick={() => handleSelectWorkoutHistory(workout)}
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{workout.name}</p>
            <p>{workout.description}</p>
            <p>Muscle Type: {workout.muscleType}</p>
            <p>Duration: {workout.duration}</p>
          </div>
        ))}
      </div>