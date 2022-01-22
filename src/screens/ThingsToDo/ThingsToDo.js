import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const ThingsToDo = () => {
  const { name } = useParams();
  return (
    <div>
      <Header />
      <h2>Things to do</h2>
      <h1>{name}</h1>

      <Footer />
    </div>
  );
};

export default ThingsToDo;
