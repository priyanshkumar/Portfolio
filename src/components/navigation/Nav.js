import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar position-fixed w-100 d-flex justify-content-around">
      <div className="mainLogo">
        <a className="d-flex align-items-center" href="/">
          <h4 className="m-2">PR</h4>
        </a>
      </div>
      <div className="d-flex align-utems -center">
        <ul className="navlinks d-flex m-0">
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#about"
            >
              ABOUT
            </a>
          </li>
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#skills"
            >
              <h3 className="m-0">I</h3>KNOW
            </a>
          </li>
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#portfolio"
            >
              PORTFOLIO
            </a>
          </li>
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
