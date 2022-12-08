import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../../Utils/constants.js";

export default function Login() {
  const navigateTo = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };
  // youTubeSignInData

  const addData = (e) => {
    e.preventDefault();

    const { email, password } = inputValue;
    // console.log(email, password);
    const getUserarray = localStorage.getItem("youTubeSignInData");

    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email ");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length must be greater than 5");
    } else {
      if (getUserarray && getUserarray.length) {
        const userData = JSON.parse(getUserarray);
        // console.log(userData);
        const userLogin = userData.filter((el, ind) => {
          return el.email === email && el.password === password;
        });
        // console.log(userLogin);
        if (userLogin.length === 0) {
          alert("Invalid details");
        } else {
          // console.log("User12");
          localStorage.setItem(
            "you_tube_user_login",
            JSON.stringify(getUserarray)
          );
          navigateTo("/feed");
        }
      }
    }
  };

  return (
    <Box minHeight="95vh" width="100%">
      <Box>
        <img src={logo} alt="" height={45} />
      </Box>
      <Box
        sx={{
          height: "auto",
          width: { sm: "100%", md: "30%" },
          bgcolor: "#282828",
          borderRadius: "10px",
          padding: "10px",
          margin: "auto",
        }}
      >
        <input
          type="email"
          id=""
          style={{
            width: "80%",
            height: "20px",
            borderRadius: "10px",
            display: "block",
            margin: "auto",
            padding: "10px",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            outline: "none",
            color: "#fff",
            marginTop: "10px",
          }}
          placeholder="Enter Your Email.."
          onChange={handleChange}
          name="email"
        />

        <input
          type="password"
          id=""
          style={{
            width: "80%",
            height: "20px",
            borderRadius: "10px",
            display: "block",
            margin: "auto",
            padding: "10px",
            background: "rgba(0,0,0,0.5)",
            border: "none",
            outline: "none",
            color: "#fff",
            marginTop: "10px",
          }}
          placeholder="Enter Your Password..."
          onChange={handleChange}
          name="password"
        />
        <button
          style={{
            width: "30%",
            height: "40px",
            display: "block",
            margin: "auto",
            borderRadius: "10px",
            marginTop: "10px",
            backgroundColor: "red",
            outline: "none",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={addData}
        >
          SIgn In
        </button>
      </Box>
      <Box
        sx={{
          width: { sm: "100%", md: "30%" },
          margin: "auto",
          marginTop: "10px",
          display: "flex",
        }}
      >
        <Typography color="#fff" display="flex">
          Already Have An Account ?{" "}
          <Typography color="red">
            <NavLink to="/" style={{ color: "red" }}>
              Sign IN
            </NavLink>
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
