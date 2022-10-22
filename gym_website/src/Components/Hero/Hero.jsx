import React from "react";
import Header from "../Header/Header";
import Hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import "./hero.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Link from "react-scroll/modules/components/Link";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        {/* The best Ad */}

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figure? */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay="4" preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter start={900} end={978} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter start={1} end={50} delay="5" preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* hero Button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <Link to="testimonials" span={true} smooth={true}>
            Join Now
          </Link>
        </button>
        <motion.div
          className="heart-rate"
          transition={{ ...transition, type: "tween" }}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "3rem" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image */}

        <img src={Hero_image} alt="" className="hero-image" />
        <motion.img
          transition={{ ...transition, type: "tween" }}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* Calories */}

        <motion.div
          className="calories"
          transition={{ ...transition, type: "tween" }}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
