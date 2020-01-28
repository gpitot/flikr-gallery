import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Searched from "../pages/Searched";
import PageNotFound from "../pages/PageNotFound";
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Searched} />
          <Route path="/search/:query" component={Searched} />

          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
