import React from 'react';
// import ReactDOM from 'react-dom';
import '../dashboard/dasboard.css';
import avatarimg from "../../images/avatar.png";
import homeicon from "./svg/homeicon.svg";
import chaticon from "./svg/chaticon.svg";
import contacticon from "./svg/contacticon.svg";
import logouticon from "./svg/logouticon.svg";


const Dashboard = () => {
    return (

        <div class="grid-container">
            <div class="menu">
                <div class="user-info">
                <div class="avatar">
                <img className="avatar" src={avatarimg} alt="avatar" /></div>
                <div class="name">USER-NAME-FIELD</div>
                </div>


                <button class="home-btn">
                    <img src={homeicon} alt="home"/>
                </button>

                <button class="chat-btn">
                    <img src={chaticon} alt=""/>
                </button>

                <button class="contact-btn">
                    <img src={contacticon} alt=""/>                    
                </button>

                <button class="logout-btn">
                    <img src={logouticon} alt="logout"/>                    
                </button>
            </div>

            
            <div class="chat-window">

                
               
            </div>
        </div>






        // <div className="chat-dashboard">

        //     <div className="top-menu">                
        //             <img className="avatar" src={avatarimg} alt="avatar" />
        //             <h2 className="user-name">USER-NAME-FIELD</h2>                

        //         <div className="menu-buttons">


        //             <div className="home-btn">
        //                 <div className="home-icon">
        //                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16V12H16L16.001 16H12ZM16 10H12C10.897 10 10 10.897 10 12V16C10 17.103 10.897 18 12 18H16C17.103 18 18 17.103 18 16V12C18 10.897 17.103 10 16 10ZM2 16V12H6L6.001 16H2ZM6 10H2C0.897 10 0 10.897 0 12V16C0 17.103 0.897 18 2 18H6C7.103 18 8 17.103 8 16V12C8 10.897 7.103 10 6 10ZM12 6V2H16L16.001 6H12ZM16 0H12C10.897 0 10 0.897 10 2V6C10 7.103 10.897 8 12 8H16C17.103 8 18 7.103 18 6V2C18 0.897 17.103 0 16 0ZM2 6V2H6L6.001 6H2ZM6 0H2C0.897 0 0 0.897 0 2V6C0 7.103 0.897 8 2 8H6C7.103 8 8 7.103 8 6V2C8 0.897 7.103 0 6 0Z" fill="#231F20"/>
        //                     </svg>
        //                     <div className="home-txt">HOME</div>
        //                 </div>
        //             </div>




        //         </div>
                
        //     </div>
            
        // </div>
    )
}

export default Dashboard