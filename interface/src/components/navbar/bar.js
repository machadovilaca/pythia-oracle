import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaCogs, FaDatabase } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

import "./bar.css"

class Bar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="/logo.png" width="235" height="50" className="d-inline-block align-top" alt="pythia-oracle logo"/>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="nav-item-style">
            <Nav>
              <IconContext.Provider value={{ color: "gray", className: "icon-padding" }}>
                  <FaCogs />
              </IconContext.Provider>
              <NavDropdown title="Configuration">
                <NavDropdown.Item href="/config/cpu">CPU</NavDropdown.Item>
                <NavDropdown.Item href="/config/memory">Memory</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="nav-item-style">
              <IconContext.Provider value={{ color: "gray", className: "icon-padding" }}>
                <FaDatabase />
              </IconContext.Provider>
              <NavDropdown title="Storage">
                <NavDropdown.Item href="/storage/tablespaces">Tablespaces</NavDropdown.Item>
                <NavDropdown.Item href="/storage/datafiles">Datafiles</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="nav-item-style">
              <IconContext.Provider value={{ color: "gray", className: "icon-padding" }}>
                <MdSecurity />
              </IconContext.Provider>
              <NavDropdown title="Security">
                <NavDropdown.Item href="/security/users">Users</NavDropdown.Item>
                <NavDropdown.Item href="/security/sessions">Sessions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Bar;
