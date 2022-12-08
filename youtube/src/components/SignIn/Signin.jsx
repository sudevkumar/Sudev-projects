import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import { logo } from "../../Utils/constants.js";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigateTo = useNavigate();
  const [inputValue, setInputValue] = useState({
    userName: "",
    email: "",
    dob: "",
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

  const addData = (e) => {
    e.preventDefault();
    const { userName, email, dob, password } = inputValue;
    const array = JSON.parse(localStorage.getItem("youTubeSignInData")) || [];

    if (userName === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email ");
    } else if (dob === "") {
      alert("Date of birth field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length must be greater than 5");
    } else {
      // alert("Data added succesfully");
      // setLocalData(inputValue);
      array.push(inputValue);
      localStorage.setItem("youTubeSignInData", JSON.stringify(array));
      navigateTo("/login");
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
          type="text"
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
          onChange={handleChange}
          name="userName"
          placeholder="Enter Your Name.."
        />

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
          type="date"
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
          onChange={handleChange}
          name="dob"
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
            <NavLink to="/login" style={{ color: "red" }}>
              Log In
            </NavLink>
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
