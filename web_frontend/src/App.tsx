import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScreen } from './pages/Home';
import { WorkspaceScreen } from './pages/Workspace';
import { SignInScreen } from './pages/SignIn';
import { SignUpScreen } from './pages/SignUp';
import { CreateMapScreen } from './pages/CreateMapScreen';
import { AuthProvider } from './component/AuthProvider';
import { PrivateRoute, AuthRoute } from './component/PrivateRoute';

export const App = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path="/workspace" component={WorkspaceScreen} />
        <PrivateRoute exact path="/createmap" component={CreateMapScreen} />
        <Route exact path="/" component={HomeScreen} />
        <AuthRoute exact path="/signin" component={SignInScreen} />
        <AuthRoute exact path="/signup" component={SignUpScreen} />
      </Switch>
    </Router>
  </AuthProvider>
);
