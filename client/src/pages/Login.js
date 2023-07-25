import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';



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

  const handleLogout = () => {
    AuthService.logout();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    console.log('Login clicked');
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
              <p>
                Logged in as {AuthService.getProfile().username}.{' '}
                <button style={buttonStyle} onClick={handleLogout}>Logout</button>
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="Your email"
                />
                <input
                  style={inputStyle}
                  type="password"
                  placeholder="******"
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
