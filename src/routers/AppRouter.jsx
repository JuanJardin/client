import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import appScreen from "../pages/appScreen";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";

import { login } from "../actions/auth";
import { firebase } from "../firebase/config-firebase";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
      <Router>
        <Switch>
          <PublicRouter path="/auth" component={AuthRouter} log={log}/>
          <PrivateRouter exact path="/" log={log} component={appScreen} />
        </Switch>
      </Router>
  );
};

export default AppRouter;
