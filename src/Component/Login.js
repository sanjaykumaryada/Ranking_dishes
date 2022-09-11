import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import userData from "./user.json";
import "./Login.css";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const login = async (formData) => {
    try {
      if (validateInput(formData)) {
        const dbusername = userData.filter((u) => {
          return user.username === u.username;
        });
        const dbpassword = userData.filter((u) => {
          return user.password === u.password;
        });

        const password = Object.values(dbpassword);
        let uname;
        let pass;
        for (let key of password) {
          uname = key.username;
          pass = key.password;
        }
        if (dbusername.length > 0 && dbpassword.length > 0) {
          enqueueSnackbar("Logged in successfully", { variant: "success" });
          persistLogin(uname, pass);
          navigate("/RankPage");
        } else {
          enqueueSnackbar("Invalid Credential", { variant: "error" });
        }
      }
    } catch (error) {
      if (error.response.status >= 400) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON",
          { variant: "warning" }
        );
      }
    }
  };
  const persistLogin = (uname, pass) => {
    localStorage.setItem("uname", uname);
    localStorage.setItem("pass", pass);
  };
  const validateInput = (data) => {
    const { username, password } = data;

    if (username === "") {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    } else if (password === "") {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="login-main-header">
        <h1 className="food-icon">RanKF@@D</h1>
        <div className="button-div">
          <button onClick={() => navigate("/")}>BACK</button>
        </div>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box className="content">
          <Stack spacing={2} className="form">
            <h2 className="title">Login</h2>
            <TextField
              id="username"
              label="username"
              variant="outlined"
              title="username"
              name="username"
              placeholder="Enter username"
              fullWidth
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <TextField
              id="password"
              label="password"
              variant="outlined"
              title="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <Button
              className="button"
              variant="contained"
              fullWidth
              onClick={() => login(user)}
            >
              Login
            </Button>
          </Stack>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
