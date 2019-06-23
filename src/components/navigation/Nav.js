import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar d-flex justify-content-around">
      <div className="mainLogo">
        <a className="d-flex align-items-center">
          <h4 className="m-2">PR</h4>
        </a>
      </div>
      <div className="d-flex align-utems -center">
        <ul className="navlinks d-flex m-0">
          <li className="px-2">
            <a href="#about">ABOUT</a>
          </li>
          <li className="px-2">
            <a href="#education">EDUCATION</a>
          </li>
          <li className="px-2">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="px-2">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
