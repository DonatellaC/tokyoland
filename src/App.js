import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Food from "./screens/Food/Food";
import Tokyo from "./screens/Tokyo/Tokyo";
import Culture from "./screens/Culture/Culture";
import Home from "./screens/Home/Home";
import ThingsToDo from "./screens/ThingsToDo/ThingsToDo";
import NotFound from "./screens/NotFound/NotFound";
import TravelTips from "./screens/TravelTips/TravelTips";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/food" component={Food}>
            <Food />
          </Route>
          <Route path="/tokyo" component={Tokyo}>
            <Tokyo />
          </Route>
          <Route path="/culture" component={Culture}>
            <Culture />
          </Route>
          <Route path="/travel-tips" component={TravelTips}>
            <TravelTips />
          </Route>
          <Route path="/things-to-do/:name" component={ThingsToDo}>
            <ThingsToDo />
          </Route>
          <Route path="/things-to-do" component={ThingsToDo}>
            <ThingsToDo />
          </Route>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
