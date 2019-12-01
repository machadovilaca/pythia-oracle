import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './bar.css'

class Bar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="/logo.png" width="235" height="50" className="d-inline-block align-top" alt="pythia-oracle logo"/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Configuration" id="basic-nav-dropdown">
              <NavDropdown.Item href="/config/cpu">CPU</NavDropdown.Item>
              <NavDropdown.Item href="/config/memory">Memory</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Storage" id="basic-nav-dropdown">
              <NavDropdown.Item href="/storage/tablespaces">Tablespaces</NavDropdown.Item>
              <NavDropdown.Item href="/storage/datafiles">Datafiles</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Security" id="basic-nav-dropdown">
              <NavDropdown.Item href="/security/users">Users</NavDropdown.Item>
              <NavDropdown.Item href="/security/sessions">Sessions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Bar;
