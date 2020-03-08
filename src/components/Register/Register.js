import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./Register.scss";

const useStyles = makeStyles({
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
    <div className="Register">
      <div className="Title">
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          className={classes.h1}
          align="center"
        >
          Register
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.caption}
          align="center"
        >
          Please complete to create your account.
        </Typography>
      </div>
      <form className="form" onSubmit={handleSignup}>
        <TextField
          label="Username"
          onChange={handleFormChange}
          value={formData.username}
          name="username"
          required
          fullWidth
        />
        <br />
        <TextField
          type="email"
          label="Email"
          onChange={handleFormChange}
          value={formData.email}
          name="email"
          required
          fullWidth
        />
        <br />
        <TextField
          label="Password"
          onChange={handleFormChange}
          value={formData.password}
          name="password"
          type="password"
          required
          fullWidth
        />
        <br />
        <TextField
          label="Confirm Password"
          onChange={handleFormChange}
          value={formData.confirmPassword}
          name="confirmPassword"
          type="password"
          inputProps={{ pattern: formData.password }}
          required
          fullWidth
        />
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
        <br />

        <Button variant="contained" type="submit" color="primary">
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Register;
