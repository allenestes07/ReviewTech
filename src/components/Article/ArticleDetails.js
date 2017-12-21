import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import ShareButtons from './ShareButtons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  flex-basis: 100%;
  margin-top: 30px;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const Column1 = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  height: 500px;
  // background-color: green;
`;

const ArticleHeader = styled.div`
  display: block;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 15px;
  font-weight: 600;
  // border: 1px solid #000000;
`;

const ArticleImage = styled.div`
  display: flex;
  height: 380.11px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #000000;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // border: 1px solid #000000;
  margin-bottom: 25px;
`;

const PublishDate = styled.span`
  color: #888888;
  padding: 5px;
  font-size: 12px;
  padding-bottom: 5px;
`;

const TextWrapper = styled.div`
  display: block;
  margin-top: 25px;
  // border: 1px solid #000000;
`;

const ArticleText = styled.p`
  display: block;
  font-family: Open Sans;
  color: #777777;
  word-wrap: break-word;
  font-size: 14px;
  text-indent: 50px;
  line-height: 24px;
  margin: 0 0 10px;
`;

const Column2 = styled.div`
  display: flex;
  flex-basis: 29%;
  flex-direction: column;
  height: 500px;
  background-color: #f4f4f5;
`;

class ArticleDetails extends Component {
  calendar = () => {
    return (
      <FontAwesome
        name = 'calendar'
        style={{
          color: '#ec0000',
          marginRight: '5px',
          paddingBottom: '5px'
        }}
      />
    );
  }
  render() {
    return (
    <Container>
      <Wrapper>
        <Column1>
          <ArticleHeader>
            {this.props.activeArticle.description}
          </ArticleHeader>
          <DetailsWrapper>
            <PublishDate>
              {this.calendar()}
              {this.props.activeArticle.published}
            </PublishDate>
          </DetailsWrapper>
          <ArticleImage image={this.props.activeArticle.image} />
          <ShareButtons activeArticle={this.props.activeArticle} />
          <TextWrapper>
            <ArticleText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ArticleText>
          </TextWrapper>
        </Column1>
        <Column2 />
      </Wrapper>
    </Container>
    );
  }
}


export default ArticleDetails;
