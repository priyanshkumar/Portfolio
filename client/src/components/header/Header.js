import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="headerHero d-flex flex-column justify-content-around align-items-center">
        <h1 className="p-4">
          <strong>PRIYANSH RADADAIYA</strong>
        </h1>
        <h2 className="p-4">
          Full stack <span>web developer</span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
