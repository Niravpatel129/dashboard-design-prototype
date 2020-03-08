import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./ForgotPassword.scss";

const useStyles = makeStyles({
  h1: {
    letterSpacing: "5px"
  },
  caption: {
    opacity: 0.4
  }
});

function ForgotPassword({ renderLogin }) {
  const classes = useStyles();

  const onSubmitRequest = () => {
    renderLogin();
  };

  return (
    <div className="ForgotPassword">
      <div className="Title">
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          className={classes.h1}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        >
          Enter your email and we send you a password reset link.
        </Typography>
      </div>
      <form className="form">
        <TextField label="Email" fullWidth />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        ></Typography>
        <br />
        <div className="buttons">
          <Button variant="contained" onClick={onSubmitRequest} color="primary">
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
