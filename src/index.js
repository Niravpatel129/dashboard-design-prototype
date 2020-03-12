import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { ThemeProvider } from "@material-ui/core";

import theme from "./themes/DefaultTheme";

const store = createStore(reducers);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
