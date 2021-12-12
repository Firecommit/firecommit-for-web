import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export const PrivateRoute = ({ ...options }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Route {...options} /> : <Redirect to="signin" />;
};

export const AuthRoute = ({ ...options }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Redirect to="workspace" /> : <Route {...options} />;
};
