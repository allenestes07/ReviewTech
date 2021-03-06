import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage/index';
import Article from './components/Article/index';

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Header />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/article" component={Article}/>
        </Body>
      </Router>
    );
  }
}

export default App;
