import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import Tablespaces from "./tablespaces";
import Datafiles from "./datafiles";

function Storage() {
  const match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/tablespaces`}>
          <Tablespaces />
        </Route>
        <Route path={`${match.path}/datafiles`}>
          <Datafiles />
        </Route>
      </Switch>
    </Router>
  );
}

export default Storage;
