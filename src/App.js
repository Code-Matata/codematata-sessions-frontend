import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import renderIf from "render-if";
//layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// pages
import MainPage from "./pages/MainPage/index";
import SessionPage from "./pages/SessionPage";
import LoaderPage from "./pages/LoaderPage/LoaderPage";

function App() {
  return (
    <Router>
      {renderIf(window.location.pathname !== "/")(<Header />)}
      <Switch>
        <Route exact path="/" component={LoaderPage} />
        <Route path="/dash" component={MainPage} />
        <Route exact path="/session" component={SessionPage} />
      </Switch>
      {renderIf(window.location.pathname !== "/")(<Footer />)}
    </Router>
  );
}

export default App;
