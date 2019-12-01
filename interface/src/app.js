import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Config from "./components/config";
import Storage from "./components/storage";
import Security from "./components/security";
import Navbar from "./components/navbar/bar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/config">
            <Config />
          </Route>
          <Route path="/storage">
            <Storage />
          </Route>
          <Route path="/security">
            <Security />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
