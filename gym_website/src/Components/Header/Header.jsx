import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./header.css";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="home"
              activeClass="active"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              programs
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
