import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header"

export default function About() {
  return (
    <>
    <Header />
      <div className="contaier py-5 my-5">
        <div className="row" style={{ marginLeft: "100px", marginTop: "30px" }}>
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus corrupti corporis minima quisquam hic quaerat
              explicabo quidem in dignissimos, labore odit natus rem delectus
              recusandae? Eius, aut ad odit debitis voluptate vitae mollitia
              sunt incidunt fuga natus esse. Repellendus, corrupti dignissimos
              aliquid nostrum at cumque esse nesciunt laboriosam, quae sed modi
              omnis temporibus explicabo voluptates soluta magni aperiam
              possimus dicta officiis quod! Porro exercitationem ducimus
              corporis. Illum alias nesciunt nulla molestias quo! Est totam
              minus ipsum doloribus. Cum ad tenetur, illum odio porro corrupti
              esse velit iste dignissimos facere rerum autem perspiciatis
              molestias. Eveniet, aliquid ea neque quo quaerat facilis?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact US
            </NavLink>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt=""
              height="460px"
              width="460px"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
