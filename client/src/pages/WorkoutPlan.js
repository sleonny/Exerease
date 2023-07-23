import React, { useState } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { SEARCH_EXERCISES, GET_WORKOUT_PLANS } from "../utils/queries";
import { CREATE_WORKOUT_PLAN } from "../utils/mutations";

export const SearchWorkoutPlan = () => {
  const [muscle, setMuscle] = useState("");
  const [searchExercises, { loading, data, error }] =
    useLazyQuery(SEARCH_EXERCISES);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchExercises({ variables: { muscle } });
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
        data?.searchExercises.map((exercise, index) => (
          <div key={index}>
            <h4>{exercise.name}</h4>
            <p>{exercise.instructions}</p>
          </div>
        ))
      )}
    </div>
  );
};

export const CreateWorkoutPlan = () => {
  const [newPlan, setNewPlan] = useState({
    name: "",
    description: "",
    muscleType: "",
    duration: "",
  });
  const [createWorkoutPlan, { data }] = useMutation(CREATE_WORKOUT_PLAN);

  const handleInputChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createWorkoutPlan({ variables: { input: newPlan } });
  };

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
  const { loading, data } = useQuery(GET_WORKOUT_PLANS);

  return (
    <div style={{ position: "absolute", top: "90%", right: "10%" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.workoutPlans.map((plan, index) => (
          <div key={index}>
            <h4>{plan.name}</h4>
            <p>{plan.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
