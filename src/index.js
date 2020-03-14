import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles/";

import App from "./App";
import reducers from "./redux/reducers";
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
