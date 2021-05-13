import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import MainPage from "./pages/MainPage/index";
import SessionPage from "./pages/SessionPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/dash" component={MainPage} />
        <Route exact path="/session" component={SessionPage} />
      </Switch>
    </Router>
  );
}

export default App;
