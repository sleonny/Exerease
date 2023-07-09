import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { error, data }] = useMutation(SIGNUP_USER);

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

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    backgroundImage: 'url(/workout-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h4>Sign Up</h4>
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

      {data && (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
};

export default SignupForm;
