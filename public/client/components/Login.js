// Jared change
import React from 'react';
import axios from 'axios';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      LoginLogout: 'Login'
    }
  }

  render() {
    return (
      <NavItem eventKey={1} href="#/loginpage">
        { this.props.signedInUser ? 'Logout' : 'Login' }
      </NavItem>
    )
  }
}
