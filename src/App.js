import React, { Component } from "react";
import "./App.css";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
// import renderIf from "render-if";
//layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// pages
// import MainPage from "./pages/MainPage/index";
// import RedordedSession from "./pages/SessionPage/RecordedSession";
// import EventsSession from "./pages/SessionPage/EventsSession";
// import LoaderPage from "./pages/LoaderPage/LoaderPage";
// import SignIn from "./pages/Auth/SignIn";
// import LostPage from "./pages/404/404";
// import CreateSession from "./pages/CreateSession";
// import Profile from "./pages/Profile/Profile";
// import CookieConsent from "./components/CookieConsent";
import ConstructionPage from "./pages/ConstructionPage/Index";

// import OAuth2RedirectHandler from "./pages/Auth/OAuth2RedirectHandler";
import { getCurrentUser } from "./utils/APIUtils";
import { ACCESS_TOKEN } from "./constants";
// import SecureRoute from "./pages/SecureRoute/SecureRoute";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

// google analytics
import ReactGA from "react-ga";
var host = window.location.hostname;
if (host !== "localhost") {
  ReactGA.initialize("UA-202237824-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
    // if (this.state.loading) {
    //   <LoaderPage />;
    // }
    return (
      <Router history={hist}>
        {/* <Header
          authenticated={this.state.authenticated}
          onLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ConstructionPage} />
            {/* <Route MainPage path="/dash" component={MainPage} />
            <Route path="/recorded-session" component={RedordedSession} />
            <Route path="/live-session" component={EventsSession} />
            <Route path="/create-session" component={CreateSession} />
            <Route
              path="/sign-in"
              render={(props) => (
                <SignIn authenticated={this.state.authenticated} {...props} />
              )}
            />
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
            <Route component={LostPage} /> */}
          </Switch>
        </BrowserRouter>

        {/* <CookieConsent /> */}
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
