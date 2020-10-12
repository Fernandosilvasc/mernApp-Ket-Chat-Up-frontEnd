import React from 'react';



import { Route, Switch, withRouter } from "react-router-dom";
import {ReactComponent as imgBackground} from "../../images/backgroundImg.svg";



function menuswitch() {
    return (
        <div>
            <Switch>
                <Route path="/dashboard" component={imgBackground}/>
                
            </Switch>
        </div>
    )
}

export default withRouter(menuswitch) 