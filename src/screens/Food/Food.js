import React from "react";
import "./Food.css";
import lists from "./data";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default Food;
