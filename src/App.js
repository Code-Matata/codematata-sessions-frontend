import React, { Component } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
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
import LostPage from "./pages/404/404";
import CreateSession from "./pages/CreateSession";
// import Profile from "./pages/Profile/Profile";
import CookieConsent from "./components/CookieConsent";

import OAuth2RedirectHandler from "./pages/Auth/OAuth2RedirectHandler";
import { getCurrentUser } from "./utils/APIUtils";
import { ACCESS_TOKEN } from "./constants";
// import SecureRoute from "./pages/SecureRoute/SecureRoute";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

export const hist = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false,
      error: null,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({ loading: true });
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ loading: false, error: error });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      <LoaderPage />;
    }
    return (
      <Router history={hist}>
        <Header
          authenticated={this.state.authenticated}
          onLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" component={LoaderPage} />
          <Route
            path="/dash"
            currentUser={this.state.currentUser}
            component={MainPage}
          />
          <Route path="/session" component={SessionPage} />
          <Route path="/create-session" component={CreateSession} />
          <Route
            path="/sign-in"
            render={(props) => (
              <SignIn authenticated={this.state.authenticated} {...props} />
            )}
          ></Route>
          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>
          <Route path="*" component={LostPage} />
        </Switch>
        <CookieConsent />
        <Footer />
      </Router>
    );
  }
}

export default App;
