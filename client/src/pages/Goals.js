import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";


const WorkoutGoalComponent = () => {
  const [workoutGoals, setWorkoutGoals] = useState([]);

  useEffect(() => {
    fetchWorkoutGoals();
  }, []);

  const fetchWorkoutGoals = async () => {
    try {
      const response = await axios.get("/api/workout-goals");
      setWorkoutGoals(response.data);
    } catch (error) {
      console.error("Error fetching workout goals:", error);
    }
  };

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  // Rest of your component logic and JSX

  return (
    <div
      style={{
        background: 'url("/background-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Workout Goals</h2>
      {workoutGoals.map((goal) => (
        <div
          key={goal._id}
          style={{ margin: "20px", background: "#ffffff", padding: "20px" }}
        >
          <p>{goal.goal}</p>
          <p>Weight: {goal.weight}</p>
          <p>Total Body: {goal.totalBody}</p>
          <p>Target: {goal.target}</p>
          <p>Date: {goal.date}</p>
        </div>
      ))}
      <Link
        to="/login"
        style={{ display: "block", textAlign: "center", marginTop: "20px" }}
      >
        Login
      </Link>
    </div>
  );
};

export default WorkoutGoalComponent;
