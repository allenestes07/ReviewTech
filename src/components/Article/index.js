import React, { Component } from 'react';
import styled from 'styled-components';
import ArticleDetails from './ArticleDetails';

const Container = styled.div`
  width: 100%;
`;

class Article extends Component {
  render() {
    return (
    <Container>
      <ArticleDetails />
    </Container>
    );
  }
}


export default Article;
