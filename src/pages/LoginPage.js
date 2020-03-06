import React, { useState } from "react";
import "./LoginPage.scss";
import Login from "../components/Login/Login";
import Bg from "../assets/bg.png";
import Register from "../components/Login/Register";
import ForgotPassword from "../components/Login/ForgotPassword";

function LoginPage() {
  const [rendering, setRendering] = useState("login");

  const renderForgotPassword = () => {
    console.log("render forgot password");
    setRendering("forgotPassword");
  };

  const renderRegister = () => {
    console.log("render register");
    setRendering("register");
  };

  const renderLogin = () => {
    console.log("render login");
    setRendering("login");
  };

  return (
    <div className="loginPage">
      <div className="bg-image">
        <img src={Bg} alt={Bg}></img>
      </div>
      {rendering === "login" && (
        <Login
          renderForgotPassword={renderForgotPassword}
          renderRegister={renderRegister}
        />
      )}
      {rendering === "register" && <Register renderLogin={renderLogin} />}
      {rendering === "forgotPassword" && (
        <ForgotPassword renderLogin={renderLogin} />
      )}
    </div>
  );
}

export default LoginPage;
