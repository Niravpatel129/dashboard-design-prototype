import React, { useState } from "react";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

import Bg from "../../assets/images/bg.png";
import "./LoginPage.scss";

function LoginPage() {
  const [pageModule, setPageModule] = useState();

  const renderSelected = () => {
    switch (pageModule) {
      case "login":
        return <Login changeRender={setPageModule} />;
      case "register":
        return <Register changeRender={setPageModule} />;
      case "forgotPassword":
        return <ForgotPassword changeRender={setPageModule} />;
      default:
        return <Login changeRender={setPageModule} />;
    }
  };

  return (
    <section className="loginPage">
      <div className="backgroundImage">
        <img src={Bg} alt="Background" />
      </div>
      <div className="LoginSection">
        {renderSelected()}
        <p className="termsCapton">Term of use. Privacy policy</p>
      </div>
    </section>
  );
}

export default LoginPage;
