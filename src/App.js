import React, { Suspense, lazy } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

// Pages
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="Loading">Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
