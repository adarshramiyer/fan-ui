import React from 'react';
import { Navbar } from 'react-bootstrap';

{
  var LIGHTGREEN = '#94eb5b';
  var DARKGRAY = '#282828';
}

const navbarStyle = {
    backgroundColor: DARKGRAY,
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 2,
    paddingBottom: 30,
};

const navbarTitleStyle = {
    color: LIGHTGREEN,
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: 0,
}

const navbarTextStyle = {
    color: LIGHTGREEN,
    textDecoration: 'none',
    fontWeight: 'normal',
    paddingLeft: 50,
    paddingBotttom: 100,
    marginBottom: 100,
    fontSize: 50,
}

const Header = (props) => {
    return (
      <Navbar style={navbarStyle}>
        <Navbar.Brand style={navbarTitleStyle} href="/">
          {props.title}
        </Navbar.Brand>
      </Navbar>
    );
};

export default Header;