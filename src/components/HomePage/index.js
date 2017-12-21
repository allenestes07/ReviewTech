import React, { Component } from 'react';
import styled from 'styled-components';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from './Grid';
import Article from './Articles';

const Container = styled.div`
  width: 100%;
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Grid articles={this.props.articles} />
        <Article />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(HomePage);
