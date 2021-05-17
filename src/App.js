import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// pages
import MainPage from "./pages/MainPage/index";
import SessionPage from "./pages/SessionPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/dash" component={MainPage} />
        <Route exact path="/session" component={SessionPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
