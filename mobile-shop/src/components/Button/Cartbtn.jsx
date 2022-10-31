import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import  addItem  from "../../Redux/Action";


export default function CartBtn() {
  // We get a state of addItems
  const state1 = useSelector((state) => state.addItem);
  console.log(state1);

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span>Cart ({state1.length})
      </NavLink>
    </>
  );
}
