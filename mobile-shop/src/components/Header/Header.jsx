import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Signin from "../Button/Signin";
// import Register from "../Button/";
import CartBtn from "../Button/Cartbtn";


export default function Header() {
  const navigateTo = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("user_login")
    navigateTo("/login")

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="#">
              Sudev's Mart
            </NavLink>
            <button onClick={userLogOut} className="btn btn-primary">Log Out</button>

            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
}
