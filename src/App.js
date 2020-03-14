import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
