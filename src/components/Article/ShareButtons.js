import React, { Component } from 'react';
import styled from 'styled-components';
import ShareButton from 'react-social-share-buttons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
  width: 100%;
`;

const Share = styled.span`
  padding: 10px;
  font-size: 12px;
  color: #888888;
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Share>Share</Share>
      <ShareButton
              compact
              socialMedia={'facebook'}
              url={window.location.href}
              media={"https://imgs.xkcd.com/comics/error_code.png"}
              text={this.props.activeArticle.description}
       />
       <ShareButton
               compact
               socialMedia={'google-plus'}
               url={window.location.href}
               media={"https://imgs.xkcd.com/comics/error_code.png"}
               text={this.props.activeArticle.description}
        />
        <ShareButton
                compact
                socialMedia={'twitter'}
                url={window.location.href}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text={this.props.activeArticle.description}
         />
      </Container>
    );
  }
}

export default HomePage;
