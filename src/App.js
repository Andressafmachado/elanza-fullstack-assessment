import React from "react";
import logo from "./logo.png";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route, Link } from "react-router-dom";
import RequestDetails from "./pages/RequestDetails";
import NewRequestPage from "./pages/NewRequestPage";

function App() {
  return (
    <div className="main">
      <Link to="/">
        <img src={logo} alt="" width="100" style={{ margin: "5%" }} />
      </Link>
      <br />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/requests/:id" component={RequestDetails} />
        <Route path="/newrequest" component={NewRequestPage} />
      </Switch>
    </div>
  );
}

export default App;
