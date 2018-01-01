import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/index';
import Article from './components/Article/index';
import Search from './components/Search/index';

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
          <Route path="/articles/:id" component ={Article} />
          <Route path="/search" component ={Search} />
        </Body>
      </Router>
    );
  }
}

// <Route exact path="/article" component={Article}/>

export default App;
