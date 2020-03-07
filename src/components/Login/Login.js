import React, { useState } from "react";
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

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
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const users = useSelector(state => state.loginsReducer);

  const handleInputChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (
      users.find(user => {
        return (
          user.username === userData.username &&
          user.password === userData.password
        );
      })
    ) {
      history.push("/dashboard");
    }
  };

  return (
    <div className="login">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className={clsx(classes.h1, "loginTitle")}
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
        <TextField
          label="Username"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        >
          <p className="redirectLink" onClick={renderForgotPassword}>
            Forgot Password
          </p>
        </Typography>
        <div className="buttons">
          <Button variant="contained" onClick={handleLogin} color="primary">
            Login
          </Button>
          <Button variant="outlined" onClick={renderRegister}>
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
