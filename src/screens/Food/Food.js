import React from "react";
import "./Food.css";
import lists from "./data";
import Header from "../../components/Header/Header";

function Food() {
  return (
    <div>
      <Header />
      <h1>Japanese Food</h1>
      {lists.map((list) => {
        const { id, name, description, image } = list;
        return (
          <div key={id} className="food">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Food;
