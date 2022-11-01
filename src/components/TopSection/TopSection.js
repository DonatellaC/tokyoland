import React from "react";
import { Link } from "react-router-dom";
import "./TopSection.css";
import background from "../../images/background.png";

function TopSection() {
  return (
    <div className="container-background">
      <img src={background} alt="Meguro River, Matsuno, Japan"></img>
      <div className="centered">
        <h1>{<Link to="/tokyo">Discover Tokyo</Link>}</h1>
      </div>
    </div>
  );
}

export default TopSection;
