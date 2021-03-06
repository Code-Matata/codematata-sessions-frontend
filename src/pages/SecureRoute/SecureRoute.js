import React from "react";
import { Route, Redirect } from "react-router-dom";

const SecureRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/sign-in",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default SecureRoute;
