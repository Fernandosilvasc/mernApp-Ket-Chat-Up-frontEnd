import React from 'react';
// import ReactDOM from 'react-dom';
import '../sidebarDashboard/sidebarDashboard.scss';
import avatarimg from "../../../assets/avatar.png";
import homeicon from "../svg/homeicon.svg";
import chaticon from "../svg/chaticon.svg";
import contacticon from "../svg/contacticon.svg";
import logouticon from "../svg/logouticon.svg";


const Dashboard = () => {
    return (

        <div className="grid-container">
            <div className="menu">
                <div className="user-info">
                    <div className="avatar">
                        <img className="avatar" src={avatarimg} alt="avatar" /></div>
                    <div className="name">USER-NAME-FIELD</div>
                </div>


                <a href="/dashboard/join" className="home-btn">
                    <img src={homeicon} alt="home" />
                </a>

                <a href="/dashboard/chat" className="chat-btn">
                    <img src={chaticon} alt="" />
                </a>

                <button className="contact-btn">
                    <img src={contacticon} alt="" />
                </button>

                <button className="logout-btn">
                    <img src={logouticon} alt="logout" />
                </button>
            </div>


            <div className="chat-window">



            </div>
        </div>
    )
}

export default Dashboard