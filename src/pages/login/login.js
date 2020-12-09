import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post('http://167.99.78.155:8080/api/login', data)
      .then((result) => {
        if (result) {
          // console.log(result);
          localStorage.setItem('token', result.data.token);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div>
      <div> Login Page</div>
      <form className="login_form">
        <p>{error}</p>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
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
              setError('');
            }}
          />
        </label>
        <input type="submit" value="Submit" onClick={signIn} />
      </form>
    </div>
  );
};

export default Login;
