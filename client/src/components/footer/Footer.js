import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="row m-0 py-3 footer">
      <div className="col-12">
        <div className="container d-flex flex-column align-items-center">
          <div className="row">
            <div className="col-12">
              <ul className="list-unstyled d-flex m-0">
                <li className="px-1 d-flex">
                  <a
                    href="https://www.linkedin.com/in/priyansh-radadiya-7b9562145/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://www.facebook.com/rayansh.radadiya.05182138?ref=bookmarks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="logo-facebook">Icon</ion-icon>
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://twitter.com/PriyanshRadadi2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="logo-twitter">Icon</ion-icon>
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://github.com/priyanshkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="logo-github">Icon</ion-icon>
                  </a>
                </li>
                <li className="px-1">
                  <a
                    href="https://www.instagram.com/priyansh_r_v/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon className="icon-sec7" name="logo-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="lead m-0">&copy; Copyright Reserved</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="lead lead-2 m-0">Designed by PR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
