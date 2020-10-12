import React from 'react';
import { Switch, Router, withRouter } from "react-router-dom";
import '../dashboard/dasboard.css';

import avatarimg from "../../images/avatar.png";
import {ReactComponent as homeicon} from "./svg/homeicon.svg";
import {ReactComponent as chaticon} from "./svg/chaticon.svg";
import {ReactComponent as contacticon} from "./svg/contacticon.svg";
import {ReactComponent as logouticon} from "./svg/logouticon.svg";
import Menuswitch from './menuswitch';


function Dashboard()  {    
    return (
        <div class="grid-container">
            <div class="menu">
                <div class="user-info">
                    <div class="avatar">
                    <img className="avatar" src={avatarimg} alt="avatar" /></div>
                    <div class="name">USER-NAME-FIELD</div>
                </div>

                <button class="home-btn">
                    <homeicon />
                </button>

                <button class="chat-btn">
                    <chaticon />
                </button>

                <button class="contact-btn">
                    <contacticon />                   
                </button>

                <button class="logout-btn">
                    <logouticon />                   
                </button>
            </div>

            <Menuswitch />
        </div>       
    )
}

export default withRouter(Dashboard);