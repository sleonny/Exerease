import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

const Login = ({ setIsLogin }) => {
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
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleLogout = () => {
    AuthService.logout();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({ variables: { email, password } });
      const token = data.login.token;
      // Assuming the login mutation returns a token upon successful login
      // Save the token in localStorage or a state management library like Redux
      // Implement AuthService.setToken(token) or something similar
      AuthService.setToken(token);

      // Perform any other necessary actions upon successful login
      console.log('Logged in successfully!');
    } catch (error) {
      // Handle login errors here
      console.error('Login error:', error.message);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div style={containerStyle}>
          <div style={headerStyle}>
            Log In
          </div>
          <div style={bodyStyle}>
            {AuthService.loggedIn() ? (
              <React.Fragment>
                <p>
                  Logged in as {AuthService.getProfile().username}.{' '}
                  <button style={buttonStyle} onClick={handleLogout}>Logout</button>
                </p>
                {/* Add any additional content you want to display when logged in */}
              </React.Fragment>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  style={inputStyle}
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button style={buttonStyle} type="submit">
                  Log In
                </button>
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup" style={linkStyle} onClick={() => setIsLogin(false)}>
                    Sign Up
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

