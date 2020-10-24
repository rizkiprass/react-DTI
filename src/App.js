import React, { useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './header';
import routes from './config/routes';
import UserContext from './userContext';

const isUserAuthenticated = false;

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route
      // {...rest}
      render={() => {
        if (isUserAuthenticated) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

const App = () => {
  const [value, setValue] = useState('Please Login');
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ value, setValue }}>
        <Header />
        <Switch>
          {routes.map((route) => {
            if (route.isPublic) {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
            return (
              <PrivateRoute
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
