import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";

// import Header from "./components/layout/Header";
// import Nav from "./components/layout/Nav";
import UserContext from "./context/UserContext";
// import Template from "./components/layout/template/Template";
import Dashboard from "./components/pages/dashboard/Dashboard";



import "./style.css";
import Template from "./components/layout/template/Template";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogdedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://localhost:8000/users/tokenIsValid",
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:8000/users/", {
          headers: { "x-auth-token": token },
        });

        setUserData({
          token: token,
          user: userRes.data,
        });
      }
    };
    checkLogdedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Template></Template>
        <Route  path='/dashboard' component={Dashboard}></Route>
        {/* <Header /> */}
        {/* <Switch>
          <Route exact path='/' component={Template}></Route>
          <Route  path='/dashboard' component={Dashboard}></Route>
        </Switch> */}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
