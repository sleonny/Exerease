import React, { useState } from 'react';
import Login from './Login';
import SignupForm from './Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </div>
    </main>
  );
};

export default AuthPage;
