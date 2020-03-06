import React, { useState } from "react";
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

function Register({ renderLogin }) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const dispatch = useDispatch(null);

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = e => {
    e.preventDefault();
    dispatch({ type: "REGISTER_USER", payload: formData });
    renderLogin();
  };

  return (
    <div className="login">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className={classes.h1}
      >
        REGISTER
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={classes.caption}
      >
        Please complete to create your account.
      </Typography>
      <form className="form" onSubmit={handleSignup}>
        <TextField
          label="Username"
          onChange={handleFormChange}
          value={formData.username}
          name="username"
          required
        />
        <br />
        <TextField
          type="email"
          label="Email"
          onChange={handleFormChange}
          value={formData.email}
          name="email"
          required
        />
        <br />
        <TextField
          label="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
          type="password"
          required
        />
        <br />
        <TextField
          label="Confirm Password"
          onChange={handleFormChange}
          value={formData.confirmPassword}
          name="confirmPassword"
          type="password"
          pattern={formData.password}
          required
        />
        <br />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        >
          <p className="redirectLink" onClick={renderLogin}>
            Already have an account? Login
          </p>
        </Typography>
        <TextField type="submit" />
      </form>
    </div>
  );
}

const useStyles = makeStyles({
  h1: {
    letterSpacing: "5px"
  },
  caption: {
    opacity: 0.4
  }
});

export default Register;
