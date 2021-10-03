import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Card, Button, CardDeck, Image } from "react-bootstrap";
import background from "./images/background.png";

import { data } from "./data";

function App() {
  const [places, setPlaces] = useState(data);
  console.log(places);
  return (
    <div>
      <header>
        <Navbar className="navbar p-3 text-light" collapseOnSelect expand="lg">
          <Navbar.Brand className="text-light" href="#home">Tokyoland</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link className="text-light" href="#things-to-do">Things to do</Nav.Link>
              <Nav.Link className="text-light" href="#culture">Culture</Nav.Link>
              <Nav.Link className="text-light" href="#food">Food</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-light" href="#footer">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <div className="container-background">
        <Image
          className="img-background"
          src={background}
          alt="Meguro River, Matsuno, Japan"
        />
        <div className="centered">
          <h1>Discover Tokyo</h1>
        </div>
      </div>

      <section id="things-to-do">
        <h1 className="title-cards" >Things to do</h1>
        <CardDeck className="card-deck">
          {places.map((place) => {
            const { id, name, img, description } = place;
            return (
              <div key={id}>

                <Card className="card">
                  <Card.Img
                    className="img-places"
                    variant="top"
                    src={img}
                    alt={name}
                  />
                  <Card.Body>
                    <Card.Title className="title-places">{name}</Card.Title>
                    <Card.Text className="text-places">{description}</Card.Text>
                    <Button variant="danger">Explore</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardDeck>
      </section>

      <footer className="footer " id="footer">
        <div className="justify-content-between">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 className="title-links">About</h6>
              <p className="text-justify">
                TokyoLand is a webpage to collect ideas for your trip to Japan.
              </p>
              <Button variant="danger">Contact</Button>
            </div>

            <div className="col-xs-6 col-md-3 ">
              <h6 className="title-links">Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="#things-to-do">Things to do</a>
                </li>
                <li>
                  <a href="#">Culture</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 ">
              <h6 className="title-links">Links</h6>
              <ul className="footer-links">

                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="container ">
              <div>
                <div className="row icons-container">
                  <ul className="social-icons">
                    <li >
                      <a className="facebook" href="#">
                        <i>
                          {<FontAwesomeIcon icon={faFacebook} />}
                        </i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i>
                          {<FontAwesomeIcon icon={faTwitter} />}
                        </i>
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i>
                          {<FontAwesomeIcon icon={faInstagram} />}
                        </i>
                      </a>
                    </li>
                    <li>
                      <a className="envelope" href="#">
                        <i>
                          {<FontAwesomeIcon icon={faEnvelope} />}
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="row copyright-row">
                  <p className="copyright-text">
                    &copy; {new Date().getFullYear()} - TokyoLand. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;