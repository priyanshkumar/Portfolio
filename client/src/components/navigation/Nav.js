import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar sticky-top w-100 d-flex justify-content-around">
      <div className="nav-ionicon d-flex justify-content-center">
        <div className="box p-3">
          <a
            href="https://www.linkedin.com/in/priyansh-radadiya-7b9562145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin" />
          </a>
        </div>
        <div className="box p-3">
          <a
            href="https://www.facebook.com/rayansh.radadiya.05182138?ref=bookmarks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-facebook">Icon</ion-icon>
          </a>
        </div>
        <div className="box p-3">
          <a
            href="https://twitter.com/PriyanshRadadi2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-twitter">Icon</ion-icon>
          </a>
        </div>
        <div className="box p-3">
          <a
            href="https://github.com/priyanshkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github">Icon</ion-icon>
          </a>
        </div>
        <div className="box p-3">
          <a
            href="https://www.instagram.com/priyansh_r_v/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon className="icon-sec7" name="logo-instagram" />
          </a>
        </div>
      </div>
      <div className="mainLogo">
        <a className="d-flex align-items-center" href="/">
          <h4 className="m-2">PR</h4>
        </a>
      </div>
      <div className="d-flex align-items-center">
        <ul className="navlinks d-flex m-0">
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="px-2">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
