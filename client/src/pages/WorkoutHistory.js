import React, { useState, useEffect } from "react";

function WorkoutHistory () {
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);  // Add this line

  useEffect(() => {
  }, []);

  const handleSelectWorkoutHistory = (workout) => {
    setSelectedWorkout(workout);  // Update selectedWorkout state here
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
      {selectedWorkout && (
        <div>
          <h2>Selected Workout</h2>
          <p style={{ fontWeight: "bold" }}>{selectedWorkout.name}</p>
          <p>{selectedWorkout.description}</p>
          <p>Muscle Type: {selectedWorkout.muscleType}</p>
          <p>Duration: {selectedWorkout.duration}</p>
        </div>
      )}
    </div>
  );
}

export default WorkoutHistory;