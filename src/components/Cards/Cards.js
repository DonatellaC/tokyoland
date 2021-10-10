import React, { useState } from "react";
import "./Cards.css";
import { data } from "../../data";
import { Card, Button, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
};

function Cards() {
    const [places, setPlaces] = useState(data);
    return (
        <div id="things-to-do m-5">
            <h1 className="title-cards">Things to do</h1>
            <section className="parent m-5">
                <Carousel
                    className="react-multi-carousel-list m-5"
                    responsive={responsive}
                    autoPlay={false}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    partialVisible={false}
                >
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
                </Carousel>
            </section>
        </div>
    );
}

export default Cards;
