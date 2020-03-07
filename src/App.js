import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./App.css";

// default theme material ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43425D"
    },
    secondary: {
      main: "#A5A4BF"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
