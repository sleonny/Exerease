import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Auth from '../../utils/auth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();

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

  const handleLogout = () => {
    Auth.logout();

    // Redirect to the home page
    history.push('/');
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div style={containerStyle}>
          <div className="card-header bg-dark text-light p-2">
            {isLogin ? 'Log In' : 'Sign Up'}
          </div>
          <div className="card-body">
            {isLogin ? (
              <LoginForm inputStyle={inputStyle} buttonStyle={buttonStyle} />
            ) : (
              <SignupForm inputStyle={inputStyle} buttonStyle={buttonStyle} />
            )}

            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <Link to="#" onClick={() => setIsLogin(false)}>
                  Sign Up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <Link to="#" onClick={() => setIsLogin(true)}>
                  Log In
                </Link>
              </p>
            )}

            {Auth.loggedIn() ? (
              <p>
                Logged in as {Auth.getProfile().username}.{' '}
                <button onClick={handleLogout}>Logout</button>
              </p>
            ) : (
              <p>
                Need to create an account?{' '}
                <Link to="#" onClick={() => setIsLogin(false)}>
                  Sign Up
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;




