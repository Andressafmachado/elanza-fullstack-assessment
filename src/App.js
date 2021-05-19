import React from "react";
import logo from "./logo.png";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <img src={logo} alt="" width="100" />
      <br />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
