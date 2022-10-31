import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Product from "../components/Products/Product";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/CheckOut/Checkout";
import Signin from "../components/Button/Signin";
import Login from "../components/Button/Login";

export default function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}
