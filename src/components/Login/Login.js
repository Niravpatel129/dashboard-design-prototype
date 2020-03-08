import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./Login.scss";

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
    // Only Allow login if user and password matches.
    if (
      users.find(user => {
        return (
          user.username === userData.username &&
          user.password === userData.password
        );
      })
    ) {
      history.push("/dashboard");
    } else {
      alert("Incorrect User / PW");
    }
  };

  return (
    <div className="Login">
      <div className="Title">
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          className={classes.h1}
          align="center"
        >
          Awesome Dash
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
          align="center"
        >
          Welcome back! Please login to your account.
        </Typography>
      </div>
      <form className="form">
        <TextField
          label="Username"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          fullWidth
        />
        <br />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          fullWidth
        />
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
        <br />
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
