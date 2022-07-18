import React from 'react';
import { Navbar } from 'react-bootstrap';
import "./App.css";
import IMAGE from './CiscoLogo.png';

{
  var LIGHTBLUE = '#049fd9';
  var WHITE = '#ffffff';
}

const navbarStyle = {
    backgroundColor: WHITE,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 2,
    paddingBottom: 30,
};

const navbarTitleStyle = {
    color: LIGHTBLUE,
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: 0,
    paddingBottom: 20,
    marginBottom: 20,
    justify: "center",
    alignItems: "center",
}

const imageStyle = {
  paddingRight: 40,
  paddingTop: 10,
}

const Header = (props) => {
    return (
      <Navbar style={navbarStyle} className="header">
        <Navbar.Brand style={navbarTitleStyle} href="/">
          <img
            style = {imageStyle}
            src = {IMAGE}
            height = {75}
            width = {150}
          />
          {props.title}
        </Navbar.Brand>
      </Navbar>
    );
};

export default Header;