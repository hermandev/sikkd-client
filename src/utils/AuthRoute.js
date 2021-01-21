import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'

const AuthRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector(data => data.auth.authentication)
  return (
    <Route
      {...rest}
      render={props => (currentUser ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default AuthRoute;
