import React from 'react';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from "react-router-dom";
import Users from "./users";
import Sessions from "./sessions";

function Security() {
  const match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/users`}>
          <Users />
        </Route>
        <Route path={`${match.path}/sessions`}>
          <Sessions />
        </Route>
      </Switch>
    </Router>
  );
}

export default Security;
