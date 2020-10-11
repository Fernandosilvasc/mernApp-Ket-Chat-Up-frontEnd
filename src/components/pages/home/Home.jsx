import React from 'react';
import Illust from "../../assets/Illustration.png";

import "./Home.scss";

function Home() {
    return (
        <>
            <div className="home-container">
                <img className="home-img" src={Illust} alt="" />
                <div className="home-desc">
                    <p>Thousands of people have started using a <span>Ket-chat-up</span> to make new friends around the world!</p>
                    <p>Let us join them in search of this new challenge.</p>
                </div>
                <a href="/login">JOIN US</a>
            </div>
        </>
    )
}

export default Home
