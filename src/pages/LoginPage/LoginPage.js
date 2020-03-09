import React, { useState } from "react";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

import Bg from "../../assets/images/bg.png";
import "./LoginPage.scss";

function LoginPage() {
  const [rendering, setRendering] = useState();

  const changeRender = page => {
    setRendering(page);
  };

  const renderSelected = () => {
    switch (rendering) {
      case "login":
        return <Login changeRender={changeRender} />;
      case "register":
        return <Register changeRender={changeRender} />;
      case "forgotPassword":
        return <ForgotPassword changeRender={changeRender} />;
      default:
        return <Login changeRender={changeRender} />;
    }
  };

  return (
    <div className="loginPage">
      <div className="bg-image">
        <img src={Bg} alt={Bg}></img>
      </div>
      <div className="LoginSection">
        {renderSelected()}
        <p className="termsCapton">Term of use. Privacy policy</p>
      </div>
    </div>
  );
}

export default LoginPage;
