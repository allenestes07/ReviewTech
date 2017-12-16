import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Article from './Articles';

const Container = styled.div`
  width: 100%;
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Grid />
        <Article />
      </Container>
    );
  }
}

export default HomePage;
