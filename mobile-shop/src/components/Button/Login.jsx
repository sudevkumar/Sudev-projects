import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import AllImg from "../SignLogin/AllImg";

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

  const addData = (e) => {
    e.preventDefault();

    const { email, password } = inputValue;
    // console.log(email, password);
    const getUserarray = localStorage.getItem("SudevMartUsersSignIn");

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
          localStorage.setItem("user_login", JSON.stringify(getUserarray));
          navigateTo("/home");
        }
      }
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
            <h3 className="text-center col-lg-6">Log In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>

              <button
                onClick={addData}
                className="btn btn-outline-primary"
                type="submit"
              >
                Submit
              </button>
            </Form>

            <p>
              Don't Have An Account?{" "}
              <span>
                <NavLink to="/">Sign In</NavLink>
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
