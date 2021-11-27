import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PrivateRoute.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  // console.log(user, "fromprivate");
  if (isLoading) {
    return (
      <div className="isLoading">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signIn", state: { from: location } }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
