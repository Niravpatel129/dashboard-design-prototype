import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Simple theme thats present across the application
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43425D"
    },
    secondary: {
      main: "#fff"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
