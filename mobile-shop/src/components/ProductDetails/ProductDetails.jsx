import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../../Redux/Action/index";
import Header from "../Header/Header"

export default function ProductDetails() {
  const productId = useParams();
  const productDetails = Data.filter((x) => x.id == productId.id);
  const product = productDetails[0];
  // console.log(product);
  const [cartBtn, setCartBtn] = useState("Add To Cart");

  //   We need to store the useDispatch in a variable.
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove From Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add To Cart");
    }
  };

  return (
    <>
    <Header />
      {/* Now We Need A Product Id Which Is Pass From The Product Page */}
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt="" height="400px" width="580px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-4"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
