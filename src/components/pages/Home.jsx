import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Login from "../auth/Login";

import image from "../images/Group.svg";
import illust from "../images/illust.png";

import styled from "styled-components";

import './Home.css';

const Button = styled.button`
    color: #fff;
    background: #6441A5;
    font-family: Freckle Face;
    font-size: 30px;
    font-weight: 400;
    padding: 20px;
    // margin: 50px auto;
    width: 25%;
    text-align: center;
    border-radius: 15px;
    border: none;
    outline: none;
    box-shadow: 5px 10px 8px #888;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    `
const homeAll = {
    // padding: "5vh 0",
    margin: "0",
    boxSizing: "border-box",
    display: "flex",
    // width: "100%",
    height: "100vh"
}

const flex = {
    display: "flex"
}

const column = {
    display: "flex",
    flexDirection: "column"
}

const font = {
    fontFamily: "Freckle Face"
}


const Home = () => {

    return (
        <div className="home-all" style={flex, homeAll}>
            <div className="home-left">
                <h1 className="home-left-name">Ket-chat-up!</h1>
                <img className="home-left-img" src={image} alt="liquid" />
            </div>

            <div className="home-right" style={column, font}>
                <div className="home-right-img">
                <img src={illust} alt="people"/>
                </div>
                <div className="home-desc">
                <p>Thousands of people have started using a <span>Ket-chat-up</span> to make new friends around the world!</p>
                <p>Let us join them in search of this new challenge.</p>
                </div>
                <div className="home-btn">
                <Link
                to='/login'
                >
                <Button 
                >
                    JOIN US
                </Button>
                </Link>

                <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                </Switch>
                </BrowserRouter>
                
                </div>
            </div>
        </div>
    )
}

export default Home
