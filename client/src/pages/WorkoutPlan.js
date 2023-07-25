import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_WORKOUT_PLAN } from "../utils/mutations";
import { GET_WORKOUT_PLANS } from "../utils/queries";

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

  const { loading, error, data } = useQuery(GET_WORKOUT_PLANS);
  console.log("Data from server:", data);
  console.log("Loading state:", loading);
  console.log("Error state:", error);

  const [addWorkoutPlan] = useMutation(ADD_WORKOUT_PLAN);

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
      exercises: [...workoutPlan.exercises, exercise],
    });
    setExercise({ name: "", description: "", sets: 0, reps: 0, duration: 0 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addWorkoutPlan({ variables: { ...workoutPlan } });
      alert("Workout plan added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('../../background-image8.jpg')", // Add this line
        backgroundSize: 'contain', // Add this line
        backgroundPosition: 'tile' // Add this line
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!loading &&
          data?.workoutPlans?.map((workoutPlan) => (
            <div
              key={workoutPlan.id}
              style={{
                color: "white",
                flex: "0 1 calc(33.33% - 20px)",
                margin: "10px",
                padding: "10px",
                textAlign: "center",
                boxSizing: "border-box",
                border: "1px solid white",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>{workoutPlan.name}</h3>
              <p style={{ fontWeight: "bold" }}>{workoutPlan.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
