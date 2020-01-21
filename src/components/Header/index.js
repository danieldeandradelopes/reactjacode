import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import Login from '../Login';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Link to="/">
      <Navbar.Brand href="#home">{'<JACODE />'}</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">
          <Link to="/">Home</Link>
        </Nav.Link>

        <Nav.Link href="#courses">
          <Link to="/courses">Courses</Link>
        </Nav.Link>
        <Nav.Link href="#blog">
          <Link to="/blog">Blog</Link>
        </Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="email" placeholder="E-mail" className="mr-sm-2" />
        <FormControl
          type="password"
          placeholder="Password "
          className="mr-sm-2"
        />
        <Button variant="primary">Login</Button>
      </Form> */}
      <Login />
      <Link to="/register">
        <Button variant="primary">Sign Up</Button>
      </Link>
    </Navbar.Collapse>
  </Navbar>
);
export default withRouter(Header);
