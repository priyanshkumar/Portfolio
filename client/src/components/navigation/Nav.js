import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar px-0 navbar-expand-lg sticky-top">
      <div className="mainLogo mx-5">
        <a className="d-flex align-items-center" href="/">
          <h4 className="m-2">PR</h4>
        </a>
      </div>
      <button
        className="mx-3 navbar-toggler collapsed nav-button"
        data-target="#collapse-target"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="collapse-target"
      >
        <span className="icon-bar top-bar" />
        <span className="icon-bar middle-bar" />
        <span className="icon-bar bottom-bar" />
      </button>
      <div
        className="collapse navbar-collapse responsive-css"
        id="collapse-target"
      >
        <div className="navbar-nav d-flex justify-content-between w-100">
          <div
            className="nav-ionicon d-flex justify-content-center align-items-center"
            id="navbarhit"
          >
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
          <div className="d-flex align-items-center justify-content-center">
            <ul className="navbar-nav navlinks d-flex">
              <li className="px-2">
                <Link
                  activeClass="active"
                  className="d-flex justify-content-center align-items-center"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="px-2 nav-item">
                <Link
                  key={2}
                  activeClass="active"
                  className="d-flex nav-link justify-content-center align-items-center"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="px-2 nav-item">
                <Link
                  activeClass="active"
                  className="d-flex nav-link justify-content-center align-items-center"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="px-2 nav-item">
                <Link
                  activeClass="active"
                  className="d-flex nav-link justify-content-center align-items-center"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li className="px-2 nav-item">
                <Link
                  activeClass="active"
                  className="d-flex nav-link justify-content-center align-items-center"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
