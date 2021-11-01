import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <header>
        <Navbar
          className="navbar p-3 text-light"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand className="text-light" href="/">
            Tokyoland
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink
                className="text-light"
                activeClassName="active"
                to="/things-to-do"
              >
                Things to do
              </NavLink>
              <NavLink
                className="text-light"
                activeClassName="active"
                to="/culture"
              >
                Culture
              </NavLink>
              <NavLink
                className="text-light"
                activeClassName="active"
                to="/food"
              >
                Food
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                className="text-light"
                activeClassName="active"
                to="travel-tips"
              >
                Travel Tips
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
