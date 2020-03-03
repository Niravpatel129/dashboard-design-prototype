import React, { useState } from "react";
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

function Register({ renderLogin }) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = e => {
    e.preventDefault();
    console.log(formData);
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
      <form className="form">
        <TextField
          id="standard-basic"
          label="Username"
          onChange={handleFormChange}
          value={formData.username}
          name="username"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          onChange={handleFormChange}
          value={formData.email}
          name="email"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          onChange={handleFormChange}
          value={formData.confirmPassword}
          name="confirmPassword"
        />
        <br />
        <br />
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
        >
          <p onClick={renderLogin}>Already have an account? Login</p>
        </Typography>
        <div className="buttons">
          <Button variant="outlined" onClick={handleSignup}>
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
