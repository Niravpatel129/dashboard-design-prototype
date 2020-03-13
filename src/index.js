import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import App from "./App";
import reducers from "./redux/reducers";
import theme from "./themes/DefaultTheme";

const store = createStore(reducers);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,

  document.getElementById("root")
);
