import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArticleDetails from './ArticleDetails';
import * as selectedArticle from '../../actions/index';

const Container = styled.div`
  width: 100%;
`;

class Article extends Component {
  componentDidMount() {
    this.props.selectedItem.selectedArticle(this.props.match.params.id, this.props.articles);
  }
  render() {
    // console.log(this.props.match.params.id);
    // console.log(this.props.articles);
    return (
    <Container>
      <ArticleDetails activeArticle={this.props.activeArticle} />
    </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    activeArticle: state.activeArticle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedItem: bindActionCreators(selectedArticle, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
