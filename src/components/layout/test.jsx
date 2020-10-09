import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import imageA from "../util/imgA";
import imageB from "../util/imgB";


function test() {
    return (
        <div>
            <h1>I'm testing</h1>
            <Switch>
                <Route path="/login" component={imageA}>
                </Route>
                <Route path="/register" component={imageB}>
                </Route>
            </Switch>
        </div>
    )
}

export default withRouter(test)
