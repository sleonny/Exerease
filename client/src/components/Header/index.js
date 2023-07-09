import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoImgStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const navigationStyle = {
    listStyle: 'none',
    display: 'flex',
  };

  const navigationItemStyle = {
    marginRight: '10px',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img src={logo} alt="Logo" style={logoImgStyle} />
        <h1>My Workout App</h1>
      </div>
      <nav style={navigationStyle}>
        <ul>
          <li style={navigationItemStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/exercise">Workout</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/profile">Profile</Link>
          </li>
          <li style={navigationItemStyle}>
            <Link to="/History">History</Link>
          </li>
          
          {/* Rest of the navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

