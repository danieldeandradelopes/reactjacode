import React, { Component } from 'react';

// import logo from '../../assets/logo.png';

import { Container } from './styles';
import Header from '../../components/Header';

export default class Blog extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Container>
          <h1>Blog!</h1>
        </Container>
      </>
    );
  }
}
