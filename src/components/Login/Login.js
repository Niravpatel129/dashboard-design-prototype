import React from "react";
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  h1: {
    letterSpacing: "5px"
  },
  caption: {
    opacity: 0.4
  }
});

function Login({ renderForgotPassword, renderRegister }) {
  const classes = useStyles();

  return (
    <div className="login">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className={classes.h1}
      >
        AWESOME DASH
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={classes.caption}
      >
        Welcome back! Please login to your account.
      </Typography>
      <form className="form">
        <TextField id="standard-basic" label="Username" />
        <br />
        <TextField id="standard-basic" label="Password" />
        <br />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        >
          <p onClick={renderForgotPassword}>Forgot Password</p>
        </Typography>
        <div className="buttons">
          <Button variant="contained">Login</Button>
          <Button variant="outlined" onClick={renderRegister}>
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
