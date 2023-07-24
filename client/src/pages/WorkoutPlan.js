// import React, { useState, useEffect } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { SEARCH_EXERCISES } from "../utils/queries";

// export const SearchWorkoutPlan = () => {
//   const [muscle, setMuscle] = useState("");
//   const [searchExercises, { loading, data, error }] =
//     useLazyQuery(SEARCH_EXERCISES);
//   const [exerciseData, setExerciseData] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     searchExercises({ variables: { muscle } });
//   };

//   useEffect(() => {
//     if (data) {
//       setExerciseData(data.searchExercises);
//     }
//   }, [data]);

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   // Pass exerciseData to CreateWorkoutPlan
//   return (
//     <div style={{ position: "absolute", top: "10%", left: "10%" }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search Muscle"
//           value={muscle}
//           onChange={(e) => setMuscle(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         exerciseData && (
//           <div>
//             <CreateWorkoutPlan exerciseData={exerciseData} />
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export const CreateWorkoutPlan = ({ exerciseData }) => {
//   const [newPlan, setNewPlan] = useState({
//     name: "",
//     description: "",
//     muscleType: "",
//     duration: "",
//     exercises: [],
//   });

//   useEffect(() => {
//     if (exerciseData) {
//       setNewPlan((prevPlan) => ({ ...prevPlan, exercises: exerciseData }));
//     }
//   }, [exerciseData]);

//   const [createWorkoutPlan, { data, error, loading }] =
//     useMutation(CREATE_WORKOUT_PLAN);

//   const handleInputChange = (e) => {
//     setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createWorkoutPlan({ variables: { input: newPlan } });
//   };

//   if (loading) {
//     return <p>Creating...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (data) {
//     return <p>Workout plan created successfully!</p>;
//   }

//   return (
//     <div style={{ position: "absolute", top: "50%", left: "50%" }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newPlan.name}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export const LoadSavedWorkoutPlan = () => {
//   const { loading, data, error } = useQuery(GET_WORKOUT_PLANS);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div style={{ position: "absolute", top: "90%", right: "10%" }}>
//       {data?.workoutPlans.map((plan) => (
//         <div key={plan.id || plan.name}>
//           <h4>{plan.name}</h4>
//           <p>{plan.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// File: pages/WorkoutPlan.js
// File: pages/WorkoutPlan.js

import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_WORKOUT_PLAN } from '../graphql/mutations';
import { GET_WORKOUT_BY_NAME } from '../graphql/queries';

// Mock Styles
const styles = {
  createWorkoutPlanStyle: { /* Style for CreateWorkoutPlan component */ },
  loadWorkoutPlanStyle: { /* Style for LoadWorkoutPlan component */ },
};

const CreateWorkoutPlan = () => {
  const [workoutPlan, setWorkoutPlan] = useState({
    name: '',
    description: '',
    muscleType: '',
    exercises: [],
    duration: '',
  });
  
  const [exercise, setExercise] = useState({
    name: '',
    description: '',
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
    const { name, value } = event.target;
    setExercise({ ...exercise, [name]: value });
  };

  const handleAddExercise = () => {
    setWorkoutPlan({ ...workoutPlan, exercises: [...workoutPlan.exercises, exercise] });
    setExercise({ name: '', description: '', sets: 0, reps: 0, duration: 0 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addWorkoutPlan({ variables: { ...workoutPlan } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Replace with your form and UI components
  );
};

const LoadWorkoutPlan = () => {
  const [workoutName, setWorkoutName] = useState("");
  const { loading, error, data } = useQuery(GET_WORKOUT_BY_NAME, { variables: { name: workoutName } });

  const handleChange = (event) => {
    setWorkoutName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // The query will be automatically executed by Apollo when the state is updated
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    // Replace with your form and UI components to display the workout plan
  );
};

const WorkoutPlan = () => {
  return (
    <div>
      <div style={styles.createWorkoutPlanStyle}>
        <CreateWorkoutPlan />
      </div>
      <div style={styles.loadWorkoutPlanStyle}>
        <LoadWorkoutPlan />
      </div>
    </div>
  );
};

export default WorkoutPlan;
