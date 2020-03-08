import React, { useState } from "react";
import "./LoginPage.scss";
import Login from "../../components/Login/Login";
import Bg from "../../assets/bg.png";
import Register from "../../components/Register/Register";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

function LoginPage() {
  const [rendering, setRendering] = useState("login");

  const renderForgotPassword = () => {
    setRendering("forgotPassword");
  };

  const renderRegister = () => {
    setRendering("register");
  };

  const renderLogin = () => {
    setRendering("login");
  };

  return (
    <div className="loginPage">
      <div className="bg-image">
        <img src={Bg} alt={Bg}></img>
      </div>
      <div className="LoginSection">
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
        <p className="termsCapton">Term of use. Privacy policy</p>
      </div>
    </div>
  );
}

export default LoginPage;
