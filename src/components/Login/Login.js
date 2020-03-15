import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./Login.scss";

const useStyles = makeStyles({
  caption: {
    opacity: 0.4
  }
});

function Login({ changeRender }) {
  const classes = useStyles();
  const history = useHistory();
  const users = useSelector(state => state.loginsReducer);

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = () => {
    // simple check to see if user matches the user/pw saved
    const isUserAccountValid = users.find(user => {
      return (
        user.username === userData.username &&
        user.password === userData.password
      );
    });

    if (isUserAccountValid) {
      history.push("/dashboard");
    } else {
      alert("Incorrect user and password");
    }
  };

  return (
    <section className="Login">
      <div className="Title">
        <Typography variant="h4" component="h4" align="center">
          Awesome Dash
        </Typography>
        <Typography
          variant="caption"
          display="block"
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
          autoComplete="off"
          fullWidth
        />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        >
          <p className="redirectLink" onClick={() => changeRender("Forgot")}>
            Forgot Password
          </p>
        </Typography>
        <br />
        <div className="buttons">
          <Button variant="contained" onClick={handleLogin} color="primary">
            Login
          </Button>
          <Button variant="outlined" onClick={() => changeRender("register")}>
            Signup
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Login;
