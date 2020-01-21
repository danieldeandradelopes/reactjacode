import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Blog from './pages/Blog';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main}></Route>
      <Route path="/courses" component={Courses}></Route>
      <Route path="/blog" component={Blog}></Route>
      <Route path="/register" component={Register}></Route>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      {/*<PrivateRoute path="/main/:page?" component={EditCountry} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/editCountry" component={EditCountry} /> */}
    </Switch>
  </BrowserRouter>
);
export default Routes;
