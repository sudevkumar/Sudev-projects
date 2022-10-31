import React from "react";
import Product from "../Products/Product";
import Header from "../Header/Header";
import Data from "../../Data/Data";
import { NavLink } from "react-router-dom";

export default function Home() {
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
      <Header />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2189&q=80"
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1598649999298-3812df10c9ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1620049185766-3d52a3922270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              className="d-block w-100"
              alt="..."
              height="500px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <Product /> */}
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
