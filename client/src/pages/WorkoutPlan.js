import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_EXERCISES } from "../utils/queries";
import CreateWorkoutPlan from "./CreateWorkoutPlan";

export const SearchWorkoutPlan = () => {
  const [muscle, setMuscle] = useState("");
  const [searchExercises, { loading, data, error }] =
    useLazyQuery(SEARCH_EXERCISES);
  const [exerciseData, setExerciseData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchExercises({ variables: { muscle } });
  };

  useEffect(() => {
    if (data) {
      setExerciseData(data.searchExercises);
    }
  }, [data]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Pass exerciseData to CreateWorkoutPlan
  return (
    <div style={{ position: "absolute", top: "10%", left: "10%" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Muscle"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        exerciseData && (
          <div>
            <CreateWorkoutPlan exerciseData={exerciseData} />
          </div>
        )
      )}
    </div>
  );
};

export const CreateWorkoutPlan = ({ exerciseData }) => {
  const [newPlan, setNewPlan] = useState({
    name: "",
    description: "",
    muscleType: "",
    duration: "",
    exercises: [],
  });

  useEffect(() => {
    if (exerciseData) {
      setNewPlan((prevPlan) => ({ ...prevPlan, exercises: exerciseData }));
    }
  }, [exerciseData]);

  const [createWorkoutPlan, { data, error, loading }] =
    useMutation(CREATE_WORKOUT_PLAN);

  const handleInputChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createWorkoutPlan({ variables: { input: newPlan } });
  };

  if (loading) {
    return <p>Creating...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    return <p>Workout plan created successfully!</p>;
  }

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPlan.name}
          onChange={handleInputChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export const LoadSavedWorkoutPlan = () => {
  const { loading, data, error } = useQuery(GET_WORKOUT_PLANS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ position: "absolute", top: "90%", right: "10%" }}>
      {data?.workoutPlans.map((plan) => (
        <div key={plan.id || plan.name}>
          <h4>{plan.name}</h4>
          <p>{plan.description}</p>
        </div>
      ))}
    </div>
  );
};
