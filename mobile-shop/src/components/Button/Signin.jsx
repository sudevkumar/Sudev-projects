import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import AllImg from "../SignLogin/AllImg";

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
    const array =
      JSON.parse(localStorage.getItem("SudevMartUsersSignIn")) || [];

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
      localStorage.setItem("SudevMartUsersSignIn", JSON.stringify(array));
      navigateTo("/login");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          Sudev's Mart
        </h1>
      </nav>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_side" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              {/* User Name */}
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicUserName"
              >
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  onChange={handleChange}
                  name="userName"
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              {/* DOB */}
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control type="date" onChange={handleChange} name="dob" />
              </Form.Group>

              {/* Password */}
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                />
              </Form.Group>

              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={addData}
              >
                Submit
              </button>
            </Form>

            <p>
              Already Have An Account{" "}
              <span>
                <NavLink to="/login">Log In</NavLink>
              </span>
            </p>
          </div>

          {/* Rigth Side */}
          <AllImg />
        </section>
      </div>
    </>
  );
}
