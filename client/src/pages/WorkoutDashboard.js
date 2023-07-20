import React, {useState} from 'react';
import { useQuery } from '@apollo/client';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { GET_WORKOUT_HISTORY } from '../utils/queries'; 

function WorkoutDashboard() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.date);
  };

  const { loading, error, data } = useQuery(GET_WORKOUT_HISTORY, {
    variables: { selectedDate: selectedDate?.toISOString() },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Workout Dashboard</h1>

      <div>
        <h2>Calendar</h2>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={
            [
              // Your workout events data
            ]
          }
          dateClick={handleDateClick}
        />
      </div>

      {selectedDate && (
        <div>
          <h2>Selected Date: {selectedDate.toISOString()}</h2>
          <h2>Workout History</h2>
          {/* Display past workout history based on the selected date */}
          {data && data.workoutHistory && (
            <ul>
              {data.workoutHistory.map((workout) => (
                <li key={workout.id}>
                  {workout.name} - Duration: {workout.duration} minutes
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default WorkoutDashboard;
