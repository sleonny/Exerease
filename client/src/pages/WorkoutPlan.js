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
    const { name, value, type } = event.target;
    if (type === "number") {
      setExercise({ ...exercise, [name]: parseInt(value) });
    } else {
      setExercise({ ...exercise, [name]: value });
    }
  };

  const handleAddExercise = () => {
    setWorkoutPlan({
      ...workoutPlan,
      exercises: [...exercise],
    });
    setExercise({ name: "", description: "", sets: 0, reps: 0, duration: 0 });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const workoutInfo = {
        ...workoutPlan,
      };
      console.log(exercise);
      workoutInfo.exercises.push(exercise);

      console.log(workoutInfo);
      setWorkoutPlan({
        ...workoutInfo,
      });

      addWorkoutPlan({ variables: { ...workoutPlan } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    handleSearch(event);
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
        <h2 style={{ color: "white", fontSize: "2em", textAlign: "center" }}>
          Create Workout Plan
        </h2>
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
              name="name"
              value={exercise.name}
              onChange={handleExerciseChange}
              placeholder="Exercise Name"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="description"
              value={exercise.description}
              onChange={handleExerciseChange}
              placeholder="Exercise Description"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="sets"
              value={parseInt(exercise.sets)}
              onChange={handleExerciseChange}
              placeholder="Sets"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="reps"
              value={parseInt(exercise.reps)}
              onChange={handleExerciseChange}
              placeholder="Reps"
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="duration"
              value={parseInt(exercise.duration)}
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
        <h2 style={{ color: "white", fontSize: "2em", textAlign: "center" }}>
          Load Workout Plans
        </h2>
        <form onSubmit={handleSearch}>
          {/* ... input fields for loading workout plan ... */}
        </form>
        {/* List of existing workout plans */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "1rem",
            width: "100%",
            boxSizing: "border-box",
            overflowY: "auto",
            maxHeight: "200px",
          }}
        >
          {loading ? (
            "Loading..."
          ) : error ? (
            `Error! ${error.message}`
          ) : (
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {data.workoutPlans.map((workoutPlan) => (
                <li
                  key={workoutPlan.id}
                  onClick={() => handleWorkoutPlanClick(workoutPlan)}
                  style={{
                    cursor: "pointer",
                    marginBottom: "0.5rem",
                    padding: "0.5rem",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                    marginBottom: "0.5rem",
                  }}
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
