import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 51px;
  padding-bottom: 5px;
  border-bottom: 1px solid #dedede ;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const NavItem = styled(Link)`
  padding: 15px 14px;
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;

    &:hover {
      color: #ec0000;
      border-bottom: 3px solid #ec0000;
  }

  &:focus {
    outline: none;
  }
`;

class Header extends Component {

  arrowIcon = () => {
    return (
      <FontAwesome
        name = 'angle-down'
        style={{
          marginLeft: '5px'
        }}
      />
    );
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <NavItem to="/">Home</NavItem>
            <NavItem to="/article">
            Technology
            {this.arrowIcon()}
            </NavItem>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
