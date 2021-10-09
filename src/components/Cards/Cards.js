import React, { useState } from 'react'
import "./Cards.css"
import { data } from "../../data";
import { Card, Button, CardDeck } from "react-bootstrap";

function Cards() {
    const [places, setPlaces] = useState(data);
    return (
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
    )
}

export default Cards