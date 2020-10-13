import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import "../dashboard/templateDashboard.scss"


import SidebarDashboard from "../dashboard/sidebarDashboard/sidebarDashboard";
import JoinChat from "./joinChat/Join";
import Chat from "./userChat/Chat"



function TemplateDashboard() {
    return (
        <>
            <div className="container-dashboard">
                <SidebarDashboard />
                <Switch>
                    <Route path='/dashboard/join' component={JoinChat}></Route>
                    <Route path='/dashboard/chat' component={Chat}></Route>
                </Switch>
            </div>
        </>
    )
}

export default TemplateDashboard
