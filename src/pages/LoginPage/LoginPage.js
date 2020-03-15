import React, { useState, lazy, Suspense } from "react";

import Bg from "../../assets/images/bg.png";
import "./LoginPage.scss";

const Login = lazy(() => import("../../components/Login/Login"));
const Register = lazy(() => import("../../components/Register/Register"));
const Forgot = lazy(() => import("../../components/Forgot/Forgot"));

function LoginPage() {
  const [pageModule, setPageModule] = useState();

  const renderSelected = () => {
    switch (pageModule) {
      case "login":
        return <Login changeRender={setPageModule} />;
      case "register":
        return <Register changeRender={setPageModule} />;
      case "Forgot":
        return <Forgot changeRender={setPageModule} />;
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
        <Suspense fallback="...">{renderSelected()}</Suspense>
        <p className="termsCapton">Term of use. Privacy policy</p>
      </div>
    </section>
  );
}

export default LoginPage;
