import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_PLANS, SEARCH_EXERCISES } from "../utils/queries";

function WorkoutPage() {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState("");

  const { loading: workoutPlansLoading, error: workoutPlansError, data: workoutPlansData } = useQuery(
    GET_WORKOUT_PLANS
  );

  const { loading: exercisesLoading, error: exercisesError, data: exercisesData } = useQuery(SEARCH_EXERCISES, {
    variables: { muscle: selectedMuscle },
  });

  useEffect(() => {
    if (workoutPlansData) {
      setWorkoutPlans(workoutPlansData.workoutPlans);
    }
  }, [workoutPlansData]);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData.searchExercises);
    }
  }, [exercisesData]);

  const handleSelectMuscle = (muscle) => {
    setSelectedMuscle(muscle);
  };

  const handleSelectWorkoutPlan = (workoutPlan) => {
    setSelectedWorkoutPlan(workoutPlan);
  };

  if (workoutPlansLoading || exercisesLoading) return <p>Loading...</p>;
  if (workoutPlansError || exercisesError) return <p>Error: {workoutPlansError || exercisesError.message}</p>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "2rem" }}>
      <h1>Workout Page</h1>

      <div>
        <h2>Workout Plans</h2>
        {workoutPlans.map((workoutPlan) => (
          <div
            key={workoutPlan.id}
            onClick={() => handleSelectWorkoutPlan(workoutPlan)}
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{workoutPlan.name}</p>
            <p>{workoutPlan.description}</p>
            <p>Muscle Type: {workoutPlan.muscleType}</p>
            <p>Duration: {workoutPlan.duration}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Exercises</h2>
        <div>
          <button onClick={() => handleSelectMuscle("chest")} style={{ marginRight: "1rem" }}>
            Chest
          </button>
          <button onClick={() => handleSelectMuscle("back")} style={{ marginRight: "1rem" }}>
            Back
          </button>
          <button onClick={() => handleSelectMuscle("legs")} style={{ marginRight: "1rem" }}>
            Legs
          </button>
          {/* Add more buttons for other muscle types */}
        </div>
        <div>
          {exercises.map((exercise) => (
            <div
              key={exercise.name}
              style={{
                background: "#f4f4f4",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{exercise.name}</p>
              <p>Type: {exercise.type}</p>
              <p>Muscle: {exercise.muscle}</p>
              <p>Equipment: {exercise.equipment}</p>
              <p>Difficulty: {exercise.difficulty}</p>
              <p>Instructions: {exercise.instructions}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedWorkoutPlan && (
        <div>
          <h2>Selected Workout Plan</h2>
          <p style={{ fontWeight: "bold" }}>{selectedWorkoutPlan.name}</p>
          <p>{selectedWorkoutPlan.description}</p>
          <p>Muscle Type: {selectedWorkoutPlan.muscleType}</p>
          <p>Duration: {selectedWorkoutPlan.duration}</p>
          {/* Render the exercises for the selected workout plan */}
          {selectedWorkoutPlan.exercises.map((exercise) => (
            <div
              key={exercise.name}
              style={{
                background: "#f4f4f4",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{exercise.name}</p>
              <p>Description: {exercise.description}</p>
              <p>Sets: {exercise.sets}</p>
              <p>Reps: {exercise.reps}</p>
              <p>Duration: {exercise.duration}</p>
              {/* Render more exercise details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkoutPage;
