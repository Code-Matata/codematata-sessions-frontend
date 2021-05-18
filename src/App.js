import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import renderIf from "render-if";
//layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// pages
import MainPage from "./pages/MainPage/index";
import SessionPage from "./pages/SessionPage";
import LoaderPage from "./pages/LoaderPage/LoaderPage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LoaderPage} />
        <Route path="/dash" component={MainPage} />
        <Route path="/session" component={SessionPage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
