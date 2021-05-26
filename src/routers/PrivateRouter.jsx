import React from "react";
import { Redirect, Route } from "react-router-dom";

const privateRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default privateRouter;
