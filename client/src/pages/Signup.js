import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

const SignupForm = ({ setIsLogin }) => {
  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  };

  const headerStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    fontSize: '24px',
    borderRadius: '5px 5px 0 0',
  };

  const bodyStyle = {
    padding: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { error, data }] = useMutation(ADD_PROFILE);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signup({
        variables: { email, password },
      });

      // Handle successful signup
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    // Clear form values
    setEmail('');
    setPassword('');
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        Sign Up
      </div>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="******"
          value={password}
          onChange={handleChangePassword}
        />
        <button style={buttonStyle} type="submit">Sign Up</button>
      </form>

      {/* Toggle between "Log In" and "Sign Up" forms */}
      <p>
        Already have an account?{' '}
        <Link to="/login" style={linkStyle} onClick={() => setIsLogin(true)}>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;

