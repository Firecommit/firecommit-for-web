import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

type Routing = {
  path: string;
  component: React.ReactNode;
};

export const App = () => {
  const paths: Array<Routing> = [
    {
      path: '/',
      component: <h1>HOME</h1>,
    },
    {
      path: '/signin',
      component: <h1>Sign In</h1>,
    },
    {
      path: '/signup',
      component: <h1>Sign Up</h1>,
    },
    {
      path: '/create-map-server',
      component: <h1>Create Map Server</h1>,
    },
  ];

  return (
    <div className="App">
      <Router>
        <Switch>
          {paths.map((elm) => (
            <Route path={elm.path} key={elm.path} exact>
              {elm.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};
