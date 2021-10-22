import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

const ThingsToDo = () => {
  const { name } = useParams();
  return (
    <div>
      <Header />
      <h1>{name}</h1>
    </div>
  );
};

export default ThingsToDo;
