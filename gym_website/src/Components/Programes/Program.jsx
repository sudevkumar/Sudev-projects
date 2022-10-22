import React from "react";
import "./program.css";
import { programsData } from "../../data/programsData.js";
import RightArrow from "../../assets/rightArrow.png";
import Link from "react-scroll/modules/components/Link";

function Program() {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="program-header">
        <span className="stroke-text">Explore Our</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>

      {/* Program Catagories */}
      <div className="program-catagories">
        {programsData.map((program) => (
          <div className="catagory">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span><Link to="testimonials" span={true} smooth={true}>Join Now</Link></span>
              <Link className="arrow-image" to="testimonials" span={true} smooth={true}><img src={RightArrow} alt="" /></Link>
              {/* <img src={RightArrow} alt="" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
