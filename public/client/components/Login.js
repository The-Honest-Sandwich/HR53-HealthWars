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

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    if (this.state.LoginLogout === 'Login') {
      this.setState({
        LoginLogout: 'Logout'
      });
    } else {
      this.setState({
        LoginLogout: 'Login'
      });
    }
  }

  render() {
    return (
      <NavItem eventKey={1} href="#/loginpage" onClick={this.updateState}>
        {this.state.LoginLogout}
      </NavItem>
    )
  }
}
