import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  // background-color: #FFFFFF;
`;

const ColumnOne = styled.div`
  flex: 1;
  flex-direction: row;
  // background-color: green;
  // border: 1px solid #FFFFFF;
`;

const ColumnTwo = styled.div`
  flex 1;
  flex-direction: row;
  // background-color: red;
`;
const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

const NavItem = styled(Link)`
  flex: 0 0 100%;
  flex-direction: row;
  padding: 5px 14px;
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

class Technology extends Component {
  Icons = (item) => {
    return (
      <FontAwesome
        name = {item}
        style={{
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
          <ColumnOne>
            <NavItemWrapper>
              <NavItem to="/">
                {this.Icons(this.props.menuItems[0].icon)}
                {this.props.menuItems[0].item}
              </NavItem>
              <NavItem to="/">
                {this.Icons(this.props.menuItems[2].icon)}
                {this.props.menuItems[2].item}
              </NavItem>
            </NavItemWrapper>
          </ColumnOne>
          <ColumnTwo>
            <NavItemWrapper>
              <NavItem to="/">
                {this.Icons(this.props.menuItems[1].icon)}
                {this.props.menuItems[1].item}
              </NavItem>
              <NavItem to="/">
                {this.Icons(this.props.menuItems[3].icon)}
                {this.props.menuItems[3].item}
              </NavItem>
            </NavItemWrapper>
          </ColumnTwo>
        </Wrapper>
      </Container>
    );
  }
}

export default Technology;
