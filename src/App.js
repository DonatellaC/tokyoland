import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Food from "./screens/Food/Food";
import Tokyo from "./screens/Tokyo/Tokyo";
import Culture from "./screens/Culture/Culture";
import Home from "./screens/Home/Home";


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
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
