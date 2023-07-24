import React, { useState, useEffect } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { GET_WORKOUT_PLANS } from "../utils/queries";
import { ADD_WORKOUT_PLAN } from "../utils/mutations";

const WorkoutPlan = () => {
  const [workoutPlan, setWorkoutPlan] = useState({
    name: "",
    description: "",
    muscleType: "",
    exercises: [],
    duration: "",
  });

  const [exercise, setExercise] = useState({
    name: "",
    description: "",
    sets: 0,
    reps: 0,
    duration: 0,
  });

  const [addWorkoutPlan] = useMutation(ADD_WORKOUT_PLAN);
  const { loading, error, data } = useQuery(GET_WORKOUT_PLANS);

  // Declare selectedWorkoutPlan state variable and its setter function
  const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWorkoutPlan({ ...workoutPlan, [name]: value });
  };

  const handleExerciseChange = (event) => {
    const { name, value } = event.target;
    setExercise({ ...exercise, [name]: value });
  };

  const handleAddExercise = () => {
    setWorkoutPlan({
      ...workoutPlan,
      exercises: [...workoutPlan.exercises, exercise],
    });
    setExercise({ name: "", description: "", sets: 0, reps: 0, duration: 0 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addWorkoutPlan({ variables: { ...workoutPlan } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      // The query will be automatically executed by Apollo when the state is updated
      // You can also refetch the data using the `refetch` function provided by the `useQuery` hook
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleWorkoutPlanClick = (workoutPlan) => {
    setSelectedWorkoutPlan(workoutPlan);
  };

  return (
    <div
      style={{
        backgroundImage: "url('workout-background8.jpg')", // Assuming the image is in the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align children to the left
          marginBottom: "2rem", // Add some margin at the bottom for spacing
        }}
      >
        <h2>Create Workout Plan</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="name"
              value={workoutPlan.name}
              onChange={handleInputChange}
              placeholder="Workout Name"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="description"
              value={workoutPlan.description}
              onChange={handleInputChange}
              placeholder="Workout Description"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="muscleType"
              value={workoutPlan.muscleType}
              onChange={handleInputChange}
              placeholder="Muscle Type"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="duration"
              value={workoutPlan.duration}
              onChange={handleInputChange}
              placeholder="Workout Duration"
            />
          </div>

          {/* Input fields for exercises */}
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="exerciseName"
              value={exercise.name}
              onChange={handleExerciseChange}
              placeholder="Exercise Name"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="exerciseDescription"
              value={exercise.description}
              onChange={handleExerciseChange}
              placeholder="Exercise Description"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="exerciseSets"
              value={exercise.sets}
              onChange={handleExerciseChange}
              placeholder="Sets"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="exerciseReps"
              value={exercise.reps}
              onChange={handleExerciseChange}
              placeholder="Reps"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="exerciseDuration"
              value={exercise.duration}
              onChange={handleExerciseChange}
              placeholder="Exercise Duration"
            />
          </div>

          <button type="button" onClick={handleAddExercise}>
            Add Exercise
          </button>
          <button type="submit">Create Workout Plan</button>
        </form>
      </div>

      <div style={{ flex: "1" }}>
        <h2>Load Workout Plan</h2>
        <form onSubmit={handleSearch}>
          {/* ... input fields for loading workout plan ... */}
        </form>

        {/* List of existing workout plans */}
        <div>
          {loading ? (
            "Loading..."
          ) : error ? (
            `Error! ${error.message}`
          ) : (
            <ul>
              {data.workoutPlans.map((workoutPlan) => (
                <li
                  key={workoutPlan.id}
                  onClick={() => handleWorkoutPlanClick(workoutPlan)}
                  style={{ cursor: "pointer", marginBottom: "0.5rem" }}
                >
                  {workoutPlan.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Display selected workout plan */}
        {selectedWorkoutPlan && (
          <div>
            <h1>{selectedWorkoutPlan.name}</h1>
            <p>{selectedWorkoutPlan.description}</p>
            <p>{selectedWorkoutPlan.muscleType}</p>
            <p>{selectedWorkoutPlan.duration}</p>
            {selectedWorkoutPlan.exercises.map((exercise, index) => (
              <div key={index}>
                <h2>{exercise.name}</h2>
                <p>{exercise.description}</p>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Duration: {exercise.duration}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlan;
