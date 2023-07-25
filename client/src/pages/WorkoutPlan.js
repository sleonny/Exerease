import React, { useState } from "react";
import { useMutation } from "@apollo/client";
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
    <div>
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
    </div>
  );
};

export default WorkoutPlan;
