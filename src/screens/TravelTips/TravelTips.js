import React from "react";
import Header from "../../components/Header/Header";

const TravelTips = () => {
  return (
    <div>
      <Header />
      <h1>Tips</h1>
      <h2>Money</h2>
      <p>
        <strong>Currency: </strong>The official currency in Japan is the Yen
        (JPY).
      </p>
      <h2>Electricity</h2>
      <p>
        <strong>Plugs: </strong>In Japan the plugs and sockets are of type A and
        B. The standard voltage is 100 V and the standard frequency is 50 / 60
        Hz. It is recommended to buy a plug adapter plus a voltage converter
      </p>
      <h2>Time</h2>
      <p>
        <strong>Time: </strong>
        When planning your trip consider that Japanese Standard Timethat (JST)
        is 9 hours ahead of GMT and has No Daylight Saving Time..
      </p>
    </div>
  );
};

export default TravelTips;
