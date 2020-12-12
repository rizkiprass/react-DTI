import React, { useState } from 'react';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        console.log(res);
        const cookieToken = res.token;
        const cookieUser = res.userId;
        setCookie('userId', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };
  return (
    <div>
      <div> Login Page</div>
      <form className="login_form">
        {/* <p>{error}</p> */}
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
        <input
          type="submit"
          value="Submit"
          onClick={onSubmitLogin}
          disabled={isLoginLoading}
        />
      </form>
    </div>
  );
};

export default Login;
