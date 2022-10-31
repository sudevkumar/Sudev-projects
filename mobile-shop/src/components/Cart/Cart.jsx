import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from "../../Redux/Action";
import Header from "../Header/Header";

export default function Cart() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    const handleClose = (item) => {
      console.log("Hi");
      dispatch(delItem(item));
    };

    return (
      <div className="my-5 py-1 bg-light rounded-3" key={cartItem.id}>
        <div className="conatiner py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="close"
            style={{ marginRight: "30px" }}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt=""
                style={{ height: "250px", width: "250px" }}
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead" style={{ fontWeight: "bold" }}>
                ${cartItem.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="my-5 py-1 bg-light rounded-3 py-3">
        <div className="conatiner py-4" style={{ paddingLeft: "20px" }}>
          <div className="row">
            <h3>Your cart is empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5"
            style={{ width: "20%", margin: "auto" }}
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
}
