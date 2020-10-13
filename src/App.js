import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";

// import Header from "./components/layout/Header";
// import Nav from "./components/layout/Nav";
import UserContext from "./context/UserContext";
import TemplateHome from "./components/layout/template/Template";
import TemplateDashboard from './components/pages/dashboard/TemplateDashboard'

// import Dashboard from "./components/pages/dashboard/sidebarDashboard";
// import Join from "./components/testsocket/Join"
// import Chat from "./components/pages/dashboard/Chat"

import "./style.css";


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
        {/* <TemplateHome /> */}
        <TemplateDashboard />
        {/* <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/join' component={Join}></Route>
        <Route path='/chat' component={Chat}></Route> */}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
