import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import iphone from '../../images/iphone.jpeg';

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
`;

const Image1 = styled(Link)`
  position: relative;
  height: 270px;
  margin: 5px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  width: calc(100% * (1/3) - 11px - 1px);
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }
`;

const ArticleText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  color: #FFFFFF;
  text-decoration: none;

  &:hover {
    color: #1e88e5;
  }
`;

const Image2 = styled(Link)`
  position: relative;
  height: 270px;
  margin: 5px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  width: calc(100% * (1/3) - 11px - 1px);
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }
`;

const Image3 = styled(Link)`
  position: relative;
  height: 270px;
  margin: 5px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  width: calc(100% * (1/3) - 11px - 1px);
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }
`;

const Image4 = styled.div`
  position: relative;
  height: 270px;
  margin: 5px;
  background-image: url('${iphone}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  width: calc(100% * (1/3) - 10px - 1px);
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }
`;

class Grid extends Component {
  render() {
    // console.log(this.props.articles[1].id);
    return (
      <Container>
        <Wrapper>
          <Image1 to={`/articles/${ this.props.articles[0].id }`} image={this.props.articles[0].image}>
            <ArticleText>
              {this.props.articles[0].description}
            </ArticleText>
          </Image1>
          <Image2 to={`/articles/${ this.props.articles[1].id }`} image={this.props.articles[1].image}>
            <ArticleText>
              {this.props.articles[1].description}
            </ArticleText>
          </Image2>
          <Image3 to={`/articles/${ this.props.articles[2].id }`} image={this.props.articles[2].image}>
            <ArticleText>
              {this.props.articles[2].description}
            </ArticleText>
          </Image3>
          <Image4>
            <ArticleText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </ArticleText>
          </Image4>
          <Image4>
            <ArticleText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </ArticleText>
          </Image4>
        </Wrapper>
      </Container>
    );
  }
}

export default Grid;