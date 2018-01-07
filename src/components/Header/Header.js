import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import * as headerDropDown from '../../actions/index';
import Technology from './Technology';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

const DropDown = styled.div`
  display: flex;
  flex-direction: row;
  // height: 200px;
  padding-bottom: 5px;
  visibility: ${props => props.opened ? 'visible' : 'hidden'};
  background: rgba(33,33,33,.9);
  width: 100%;
  z-index: 9999;
`;

class Header extends Component {

  handleOnClick = (e, item) => {
    this.props.clicked.headerDropDown(item);
    e.preventDefault();
  }

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
            <NavItem
              to="/"
              onClick={(e) => this.handleOnClick(e, 'Technology') }
              onBlur={(e) => this.handleOnClick(e, '') }
            >
            Technology
            {this.arrowIcon()}
            </NavItem>
            <NavItem
              to="/"
              onClick={(e) => this.handleOnClick(e, 'Gaming') }
              onBlur={(e) => this.handleOnClick(e, '') }
            >
            Gaming
            {this.arrowIcon()}
            </NavItem>
          </NavItemWrapper>
            <SearchContainer to="/search">
              <FontAwesome
                name = 'search'
              />
            </SearchContainer>
        </Wrapper>
        <DropDown opened={this.props.opened}>
          {this.props.itemClicked === "Technology" ? <Technology menuItems={this.props.menuItems} /> : null }
        </DropDown>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    opened: state.headerDropDown.opened,
    itemClicked: state.headerDropDown.itemClicked,
    menuItems: state.menuItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clicked: bindActionCreators(headerDropDown, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
