import React, { Component } from 'react';
import styled from 'styled-components';
import SearchArticles from "./SearchArticles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as setSearch from '../../actions/index';

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

const Form = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  outline: none;
  background: #FFFFFF;

  &:focus, :hover {
    color: #4b515d;
    border: 1px solid #B8B6B6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 700px) {
    border: 1px solid #B8B6B6;
  }
`;

class SearchContent extends Component {
  handleOnChange = (e) => {
    this.props.searchText.setSearch(e.target.value);
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Form>
            <Input
              onChange={(e) => this.handleOnChange(e) }
            />
          </Form>
          <SearchArticles articles={this.props.articles} />
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchText: bindActionCreators(setSearch, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContent);
