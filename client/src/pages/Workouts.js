import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_WORKOUTS } from './graphql/queries'; // Import your GraphQL query

function WorkoutPage() {
  const [searchText, setSearchText] = useState('');
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState(30);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(parseInt(e.target.value));
  };

  const handleAddWorkout = (workout) => {
    setSelectedWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  const handleRemoveWorkout = (index) => {
    setSelectedWorkouts((prevWorkouts) =>
      prevWorkouts.filter((_, i) => i !== index)
    );
  };

  const { loading, error, data } = useQuery(GET_WORKOUTS, {
    variables: { searchText },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Render the workout search logic here

  return (
    <div
      style={{
        background: `url('/background-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1>Workout Page</h1>

      <div>
        <h2>Search for Workouts</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
        />
        {/* Include your workout search logic here */}
      </div>

      <div>
        <h2>Selected Workouts</h2>
        {selectedWorkouts.length === 0 ? (
          <p>No workouts selected</p>
        ) : (
          <ul>
            {selectedWorkouts.map((workout, index) => (
              <li key={index}>
                {workout.name} - Duration: {workout.duration} minutes
                <button onClick={() => handleRemoveWorkout(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>Choose Duration</h2>
        <select value={selectedDuration} onChange={handleDurationChange}>
          <option value={30}>30 minutes</option>
          <option value={45}>45 minutes</option>
          <option value={60}>60 minutes</option>
        </select>
      </div>

      <div>
        <h2>Calendar Stamp</h2>
        {/* Include your calendar stamp logic here */}
      </div>
    </div>
  );
}

export default WorkoutPage;
