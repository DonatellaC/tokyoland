import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function Footer() {
    return (
        <div>
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
                                    <a href="/culture">Culture</a>
                                </li>
                                <li>
                                    <a href="/food">Food</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3 ">
                            <h6 className="title-links">Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="#contact-us">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#contribute">Contribute</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="container ">
                            <div>
                                <div className="row icons-container">
                                    <ul className="social-icons">
                                        <li>
                                            <a className="facebook" href="#facebook">
                                                <i>{<FontAwesomeIcon icon={faFacebook} />}</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="#twitter">
                                                <i>{<FontAwesomeIcon icon={faTwitter} />}</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="instagram" href="#instagram">
                                                <i>{<FontAwesomeIcon icon={faInstagram} />}</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="envelope" href="#envelope">
                                                <i>{<FontAwesomeIcon icon={faEnvelope} />}</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="row copyright-row">
                                    <p className="copyright-text">
                                        &copy; {new Date().getFullYear()} - TokyoLand. All rights reserved.
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

export default Footer;
