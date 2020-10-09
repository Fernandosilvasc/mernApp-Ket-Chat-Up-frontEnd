import React, { useState, useContext } from 'react';
import Axios from "axios";

import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../util/errorNotice";


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

        }
        catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

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



    return (
        <div className="page">
            <h2>Register</h2>

            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}

            <form onSubmit={submit}>
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

                <input type="submit" className="login-btn" value="Register" />

            </form>
        </div>
    )
}

export default Register
