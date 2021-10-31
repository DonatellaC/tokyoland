import React from "react";
import "./NotFound.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("./");
  };
  return (
    <div className="container-notFound" id="overlay">
      <div id="text">
        <h1 className="title-notFound">404</h1>
        <h2 className="subtitle-notFound">Page not found</h2>
        <p className="text-notFound">
          Oh, no! The page you are looking for does not exist.{" "}
        </p>
        <p className="text-notFound">
          Click the button below to go back to the homepage.
        </p>
        <Button variant="danger" onClick={handleClick}>
          Home
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
