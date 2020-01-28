import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";


class Routes extends Component {


    render() {
        <BrowserRouter>
            <Switch>
                <Route path="/search/:query" component = {Searched} />

                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    }
}

export default Routes;