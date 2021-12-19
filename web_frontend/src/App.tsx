import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { theme } from './theme/theme';
import { HomeScreen } from './pages/Home';
import { WorkSpaceScreen } from './pages/Workspace/Workspace';
import { WorkspaceTopScreen } from './pages/Workspace';
import { SignInScreen } from './pages/SignIn';
import { SignUpScreen } from './pages/SignUp';
import { CreateMap } from './pages/CreateMap';
import { AuthProvider } from './component/AuthProvider';
import { PrivateRoute, AuthRoute } from './component/PrivateRoute';
import { NotificationProvider } from './component/NotificationProvider';

export const App = () => (
  <AuthProvider>
    <NotificationProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <PrivateRoute
              exact
              path="/workspace"
              component={WorkspaceTopScreen}
            />
            <PrivateRoute
              exact
              path="/workspace/:wid"
              component={WorkSpaceScreen}
            />
            <PrivateRoute exact path="/createmap" component={CreateMap} />
            <Route exact path="/" component={HomeScreen} />
            <AuthRoute exact path="/signin" component={SignInScreen} />
            <AuthRoute exact path="/signup" component={SignUpScreen} />
          </Switch>
        </Router>
      </ThemeProvider>
    </NotificationProvider>
  </AuthProvider>
);
