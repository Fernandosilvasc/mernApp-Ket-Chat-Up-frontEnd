import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import bsplash from "../images/Vector-3.png";

export default function Header() {
    return (
        <div id="nav">
        <div className="rectangle">
            <img src={bsplash} alt=""/>
        </div>
        <div className="text">Ket-chat-up!</div>
    </div> 
    )
}