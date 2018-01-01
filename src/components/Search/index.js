import React, { Component } from 'react';
import styled from 'styled-components';
import SearchContent from './SearchContent';

const Container = styled.div`
  width: 100%;
`;

class Search extends Component {
  render() {
    return (
      <Container>
        <SearchContent />
      </Container>
    );
  }
}

export default Search;
