import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43425D"
    },
    secondary: {
      main: "#A5A4BF"
    }
  },
  typography: {
    fontSize: 12.5,
    fontFamily: "Source Sans Pro"
  }
});

export default theme;
