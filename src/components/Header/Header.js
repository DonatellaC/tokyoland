import React from "react";
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
              <Nav.Link className="text-light" href="#things-to-do">
                Things to do
              </Nav.Link>
              <Nav.Link className="text-light" href="/culture">
                Culture
              </Nav.Link>
              <Nav.Link className="text-light" href="/food">
                Food
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-light" href="#footer">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
