import React from "react";
import "./loginPage.scss";
import Login from "../components/login";
import Bg from "../assets/bg.png";

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="bg-image">
        <img src={Bg} alt={Bg}></img>
      </div>
      <Login />
    </div>
  );
}

export default LoginPage;
