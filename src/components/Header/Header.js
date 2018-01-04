import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 51px;
  padding-bottom: 5px;
  background: rgba(33,33,33,.9);
  border-bottom: 1px solid #dedede ;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
`;

const NavItem = styled(Link)`
  padding: 15px 14px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Gotham SSm A","Gotham SSm B",sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  text-decoration: none;

    &:hover {
      color: #1e88e5;
    }

  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px 14px;
  overflow: hidden;
  cursor: pointer;
  color: #FFFFFF;
  text-decoration: none;

  &:hover {
    color: #1e88e5;
  }
`;

class Header extends Component {

  arrowIcon = () => {
    return (
      <FontAwesome
        name = 'angle-down'
        style={{ marginLeft: '5px' }}
      />
    );
  }

  render() {
    return (
      <Container>
        <Wrapper>
        <NavItemWrapper>
          <NavItem to="/">Home</NavItem>
            <NavItem to="/article">
            Technology
            {this.arrowIcon()}
            </NavItem>
          </NavItemWrapper>
            <SearchContainer to="/search">
              <FontAwesome
                name = 'search'
              />
            </SearchContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
