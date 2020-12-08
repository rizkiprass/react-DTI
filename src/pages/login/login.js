import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div> Login Page</div>
      <form className="login_form">
        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
