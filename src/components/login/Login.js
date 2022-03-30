import { Paper, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/Auth";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUser("12345"));
  };
  return (
    <>
      <Paper className="loginPaper">
        <div className="loginheaderpart">
          <Typography
            variant="display3"
            gutterBottom
            className="loginpageheader"
          >
            Login
          </Typography>
        </div>
        <Typography variant="headline" component="h3">
          Login to your account
        </Typography>
        <form>
          <div className="loginformgroup">
            {/* <AccountCircle /> */}

            <TextField id="input-username" label="Username" />
          </div>
          <div className="loginformgroup">
            {/* <Key /> */}

            <TextField type="password" id="input-password" label="Password" />
          </div>
        </form>

        <Button variant="raised" color="primary" onClick={handleLogin}>
          <Typography>Login</Typography>
        </Button>
      </Paper>
    </>
  );
};

export default Login;
