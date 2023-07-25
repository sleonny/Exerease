import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    backgroundImage: "linear-gradient(to right, rgb(78, 90, 101), rgb(217, 192, 63))",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    fontWeight: "bold",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImgStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  const navigationStyle = {
    listStyle: "none",
    display: "flex",
    padding: "0",
    margin: "0",
  };

  const navigationItemStyle = {
    marginRight: "20px",
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <h1>ExerEase - Workouts Designed For You</h1>
      </div>
      <nav>
        <ul style={navigationStyle}>
          <li style={navigationItemStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/exercise">Workout</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/profile/:profileId">Profile</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/WorkoutHistory">History</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/WorkoutPlan">Workout Plan</Link>
          </li>
          {/* Rest of the navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
