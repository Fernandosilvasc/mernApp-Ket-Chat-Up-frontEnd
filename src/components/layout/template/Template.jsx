import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";



import "../template/Template.scss"

function Template() {
    return (
        <>
            <div className="container">
                <aside>
                    <Logo className="logo"/>
                </aside>
                <section>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                    </Switch>
                </section>
            </div>
        </>
    )
}

export default withRouter(Template)
