import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomeScreen } from './pages/Home';
import { WorkspaceScreen } from './pages/Workspace';
import { SignInScreen } from './pages/SignIn';
import { SignUpScreen } from './pages/SignUp';
import { CreateMapScreen } from './pages/CreateMapScreen';

export const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignInScreen} />
        <Route exact path="/signup" component={SignUpScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/workspace" component={WorkspaceScreen} />
        <Route exact path="/createmap" component={CreateMapScreen} />
      </Switch>
    </Router>
  </div>
);
