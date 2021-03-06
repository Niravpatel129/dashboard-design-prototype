import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./Forgot.scss";

const useStyles = makeStyles({
  caption: {
    opacity: 0.4
  }
});

function Forgot({ changeRender }) {
  const classes = useStyles();

  const onSubmitRequest = () => {
    changeRender("login");
  };

  return (
    <section className="Forgot">
      <div className="Title">
        <Typography variant="h4" component="h4" align="center">
          Password Reset
        </Typography>
        <Typography
          variant="caption"
          display="block"
          className={classes.caption}
          align="center"
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
    </section>
  );
}

export default Forgot;
