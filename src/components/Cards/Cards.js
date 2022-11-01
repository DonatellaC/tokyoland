import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";

function Cards() {
  const [places, setPlaces] = useState(data);

  return (
    <div id="things-to-do">
      <h1 className="title-cards">Things to do</h1>
      <section className="parent m-5 card-section">
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
                  <Link to={`/things-to-do/`}>
                    <Button className="btn-explore" variant="danger">
                      Explore
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Cards;
