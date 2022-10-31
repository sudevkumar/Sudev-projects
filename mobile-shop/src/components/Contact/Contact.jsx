import React from "react";
import Header from "../Header/Header";

export default function Contact() {
  return (
    <>
    <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="col-12 text-center py-4 my-4">
              Have Some Questions?
            </h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              height="460px"
              width="460px"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleInput" class="form-label">
                  User Name
                </label>
                <input type="text" class="form-control" id="exampleInput" placeholder="First Name Last Name"/>
              </div>
              <div class="mb-3">
                <label for="exampleInput" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Write A Message
                </label>
                <textarea
                  style={{ resize: "none" }}
                  rows="8"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Text...."
                />
              </div>

              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
