import React, { useContext } from 'react';
import UserContext from '../userContext';

const Login = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <div className="content-wrapper"> Please login!</div>
      <div>{value}</div>
      <button type="button" onClick={() => { return setValue('Welcome'); }}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
