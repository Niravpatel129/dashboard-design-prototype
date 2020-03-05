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

function ForgotPassword({ renderForgotPassword, renderRegister }) {
  const classes = useStyles();

  const onSubmitRequest = () => {
    renderRegister();
  };

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
        Enter your email and we send you a password reset link.
      </Typography>
      <form className="form">
        <TextField id="standard-basic" label="Email" />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        ></Typography>
        <br />
        <div className="buttons">
          <Button variant="contained" onClick={onSubmitRequest}>
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
