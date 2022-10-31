import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../../Data/Data";
import Header from "../Header/Header";

export default function Product() {
  const cardItem = (item) => {
    return (
      <div className="card my-3 py-2" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt="..." height="300px" />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">$ {item.price}</p>
          <NavLink
            to={`/product/${item.id}`}
            className="btn btn-outline-primary"
          >
            Add to Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {" "}
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{Data.map(cardItem)}</div>
      </div>
    </>
  );
}
