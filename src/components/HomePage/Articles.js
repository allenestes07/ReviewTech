import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import iphone from '../../images/iphone.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  position: relative;
  width: 100%;
  margin-top: 30px;
  // border: 1px solid #000000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 60%;
  flex-flow: wrap;
  margin: 0px 5px 5px 5px;
  border-top: 3px solid #1e88e5;
  background-color: transparent;
`;

const HeaderWrapper = styled.div`
  display: block;
  width: 100%;
  margin-left: 5px;
`;

const Column1Header = styled.div`
  width: 100px;
  color: #FFFFFF;
  background-color: #1e88e5;
  text-align: center;
  padding: 8px 15px;
  line-height: 20px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
`;

const Arrow = styled.div`
    position: absolute;
    content: " ";
    width: auto;
    height: auto;
    top: 2;
    margin-left: -10px;
    left: 70px;
    border-width: 10px;
    border-style: solid;
    border-color: #1e88e5 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin-top: 30px;
  padding: 15px;
`;

const Image1 = styled.div`
  background-image: url('${iphone}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 15px;
  height: 260.77px;
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }
`;

const ArticleHeader = styled.h4`

  &:hover {
    cursor: pointer;
    color: #1e88e5;
  }
`;

const PublishDate = styled.span`
  color: #888888;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  margin-top: 30px;
  padding: 15px;
`;

const Image2 = styled.div`
  background-image: url('${iphone}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 15px;
  height: 93.38px;
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
  }
`;

const Ads = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  margin: 5px;
  background-color: #f4f4f5;;
`;

class Articles extends Component {
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
        <HeaderWrapper>
          <Column1Header>
            Articles
          </Column1Header>
         </HeaderWrapper>
          <Article>
          <Arrow />
            <Column1>
              <PublishDate>
                {this.calendar()}
                September 17, 2017
              </PublishDate>
              <Image1 />
                <ArticleHeader>
                Why The iPhone X Will Force Apple To Choose Between Good Or Evil
                </ArticleHeader>
                <PublishDate>
                  {this.calendar()}
                  September 17, 2017
                </PublishDate>
              <Image2 />
                <ArticleHeader>
                  The first 'Wolfenstein II' add-on pack is available now
                </ArticleHeader>
            </Column1>
            <Column2>
                <PublishDate>
                  {this.calendar()}
                  December 15, 2017
                </PublishDate>
                <Image2 />
                <ArticleHeader>
                As online ads fail, sites mine cryptocurrency
                </ArticleHeader>
                <PublishDate>
                  {this.calendar()}
                  September 17, 2017
                </PublishDate>
                <Image2 />
                  <ArticleHeader>
                    Buy an Xbox One X and get 'PUBG' free for a limited time
                  </ArticleHeader>
                  <PublishDate>
                    {this.calendar()}
                    September 17, 2017
                  </PublishDate>
                  <Image2 />
                    <ArticleHeader>
                      Creepy platformer 'Inside' leaps from console to iOS
                    </ArticleHeader>
            </Column2>
          </Article>
          <Ads />
        </Wrapper>
      </Container>
    );
  }
}

export default Articles;
