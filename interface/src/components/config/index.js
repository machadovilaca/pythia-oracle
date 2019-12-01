import React from 'react';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from "react-router-dom";
import Cpu from "./cpu";
import Memory from "./memory";

function Config() {
  const match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/cpu`}>
          <Cpu />
        </Route>
        <Route path={`${match.path}/memory`}>
          <Memory />
        </Route>
      </Switch>
    </Router>
  );
}

export default Config;
