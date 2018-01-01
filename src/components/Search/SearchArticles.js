import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import ShareButtons from '../../components/Article/ShareButtons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  margin-top: 30px;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  // border:1px solid #000000;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  padding: 5px 14px;
`;

const Article = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  border-bottom:1px solid #d5d5d6;
  margin-bottom: 5px;
`;

const Image = styled.img`
  height: 75px;
  width: 75px;
  flex-shrink: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 5px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

const PublishDate = styled.span`
  flex: 1 100%;
  color: #888888;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const Description = styled(Link)`
  flex: 1 100%;
  color: #000000;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #1e88e5;
  }
`;

const Share = styled.div`
`;

class SearchArticles extends Component {
Content = () => (
  <ArticleWrapper>
  {this.props.articles.map((article, index) =>
    <Article key={index}>
    <Image image={article.image} />
    <TextWrapper>
      <Description to={`/articles/${ article.id }`}>{article.description}</Description>
      <PublishDate> Published:
        <FontAwesome
          name = 'calendar'
          style={{
            color: '#ec0000',
            marginLeft: '5px',
            marginRight: '5px',
            paddingBottom: '5px'
          }}
        />
      {article.published}
      </PublishDate>
      <Share>
      <ShareButtons activeArticle={article} />
      </Share>
    </TextWrapper>
    </Article>
  )}
  </ArticleWrapper>
);
  render() {
    return (
      <Container>
        <Wrapper>
          {this.Content()}
        </Wrapper>
      </Container>
    );
  }
}

export default SearchArticles;
