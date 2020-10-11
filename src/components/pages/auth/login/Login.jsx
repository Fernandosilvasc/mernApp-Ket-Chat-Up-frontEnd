import React, { useState, useContext } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import UserContext from "../../../../context/UserContext";
import ErrorNotice from "../../../util/errorNotice";
import Splash1 from "../../../assets/Splash1.png";
import Splash2 from "../../../assets/Splash2.png";
import Avatar from "../../../assets/AvatarLogin.png";

import "./Login.scss";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:8000/users/login",
                loginUser
            );

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/dashboard");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <>
            <div className="login-container">
                <img className="splash1" src={Splash1} alt="" />
                <div className="box-form">
                    {error && (
                        <ErrorNotice message={error} clearError={() => setError(undefined)} />
                    )}
                    <img className="avatar-login" src={Avatar} alt="" />
                    <form className="form" onSubmit={submit}>
                        <input
                            id="login-email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                        />
                        <label htmlFor="login-email">Forgot e-mail?</label>
                        <input
                            id="login-password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password"
                        />
                        <label htmlFor="login-password">Forgot password?</label>
                        <input type="submit" className="login-btn" value="Log In" />
                        <div className="join">
                            <a href="/register">
                                <h1>NOT A MEMBER YET? JOIN TODAY!</h1>
                            </a>
                        </div>
                    </form>
                </div>
                <img className="splash2" src={Splash2} alt="" />
            </div>
        </>
    )
}

export default Login
