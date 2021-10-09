import React from 'react'
import "./TopSection.css"
import { Image } from "react-bootstrap";
import background from "../../images/background.png";

function TopSection() {
    return (
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
    )
}

export default TopSection