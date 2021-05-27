import React from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
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
import LostPage from "./pages/404/404";
import CreateSession from "./pages/CreateSession";
import CookieConsent from "./components/CookieConsent";

export const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoaderPage} />
          <Route path="/dash" component={MainPage} />
          <Route path="/session" component={SessionPage} />
          <Route path="/create-session" component={CreateSession} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="*" component={LostPage} />
        </Switch>
      </BrowserRouter>
      <CookieConsent />
      <Footer />
    </Router>
  );
}

export default App;
