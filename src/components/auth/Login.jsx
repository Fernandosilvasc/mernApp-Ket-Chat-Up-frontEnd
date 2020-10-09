import React, { useState, useContext } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../util/errorNotice";
import avatar from "../images/Group.png";
import splash from "../images/Vector.png"
import splash2 from "../images/Vector-2.png"


export default function Register() {
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
        "http://localhost:8080/users/login",
        loginUser
      );

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
    <div className="login-container">

    <div className="login">
      <div className="splash">
<img src={splash} alt=""/>
      </div>
      <div className="avatar">
        <img src={avatar} alt=""/>
      </div>
      
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
  
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
    
              <label htmlFor="login-email">Forgot e-mail?</label>
        <br/>
      
      
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
   
        <label htmlFor="login-password">Forgot password?</label>
        <br/>
        <br/>
        <input type="submit" className="login-btn" value="Log In" />
        <div className="join">
        <a href="Register.jsx">
        <h1>NOT A MEMBER YET? JOIN TODAY!</h1>
        </a>
      </div>
      </form>
    
    
      <div className="splash2">
        <img src={splash2} alt=""/>
      </div>

    </div>
    </div>
    </>
  );
}
