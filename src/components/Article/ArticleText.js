import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const ContentText = styled.p`
  display: block;
  font-family: anago;
  color: rgb(97, 104, 115);
  word-wrap: break-word;
  font-size: 0.9rem;
  font-style: normal;
  text-align: left;
  font-weight: normal;
  line-height: 170%;
  text-indent: 25px;
`;

class ArticleText extends Component {
  render() {
    const paragraph = this.props.content.map((para, index) =>
      <ContentText key={index}>{para.paragraph}</ContentText>
    );
    return (
      <Container>
        {paragraph}
      </Container>
    );
  }
}

export default ArticleText;
