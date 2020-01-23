import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Navbar, Buttons } from './styles';

// import Login from '../Login';

const Header = () => (
  <Navbar>
    <Link to="/">{'<JACODE />'}</Link>
    <div>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/blog">Blog</Link>
    </div>
    <Buttons>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
    </Buttons>
  </Navbar>
);
export default withRouter(Header);
