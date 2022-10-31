import React from "react";
import sign from "../../Assets/sign.svg";

export default function AllImg() {
  return (
    <>
      <div className="right_data mt-3" style={{ width: "100%" }}>
        <div className="sign_img mt-3">
          <img style={{ maxWidth: "480px" }} src={sign} alt="" />
        </div>
      </div>
    </>
  );
}
