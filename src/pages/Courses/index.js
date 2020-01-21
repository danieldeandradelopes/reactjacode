import React, { Component } from 'react';

// import logo from '../../assets/logo.png';

import { Container } from './styles';
import Header from '../../components/Header';

export default class Courses extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Container>
          <h1>Courses!</h1>
        </Container>
      </>
    );
  }
}
