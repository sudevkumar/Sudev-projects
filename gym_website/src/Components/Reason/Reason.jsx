import React from "react";
import "./reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reason() {
  return (
    <div className="reasons" id="reasons">
      {/* left reason */}
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      {/* right reason */}
      {/* Why choose us  */}
      <div className="right-r">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text">WHY</span>
          <span> CHOOSE US?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        {/* Partners */}
        <span id="our-partner-text">OUR PARTNERS</span>
        <div className="partners">
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
          <img src={nb} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reason;
