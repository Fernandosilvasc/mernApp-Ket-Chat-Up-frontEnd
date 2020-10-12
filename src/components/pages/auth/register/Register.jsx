import React, { useState, useContext } from 'react';
import Axios from "axios";

import { useHistory } from "react-router-dom";
import UserContext from "../../../../context/UserContext";
import ErrorNotice from "../../../util/errorNotice";
import Splash1 from "../../../assets/Splash1.png";
import Splash2 from "../../../assets/Splash2.png";
import Avatar from "../../../assets/AvatarLogin.png";

import "./Register.scss"


function Register() {

    const [name, setName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newUser = { name, userName, email, password };
            const loginUser = { email, password }
            await Axios.post("http://localhost:8000/users/register", newUser);
            const loginRes = await Axios.post("http://localhost:8000/users/login", loginUser);
    
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
    
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/dashboard");
        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

    }


    return (
        <>
            <div className="register-container">
                <img className="splash1" src={Splash1} alt="" />
                <div className="box-form">
                    {error && (
                        <ErrorNotice message={error} clearError={() => setError(undefined)} />
                    )}
                    <img className="avatar-login" src={Avatar} alt="" />
                    <form className="form" onSubmit={submit}>
                        <input
                            id="register-name"
                            type="text"
                            placeholder="Name:"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            id="register-userName"
                            type="text"
                            placeholder="UserName:"
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <input
                            id="register-email"
                            type="email"
                            placeholder="Email:"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            id="register-password"
                            type="password"
                            placeholder="Password:"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input type="submit" className="register-btn" value="Register" />

                    </form>
                    <img className="splash2" src={Splash2} alt="" />
                </div>
            </div>
        </>
    )
}

export default Register
