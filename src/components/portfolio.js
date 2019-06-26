import React, { Component } from "react";
import Nav from "./navigation/Nav";
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolis from "./portfolio/Portfolis";
import Contact from "./contact/Contact";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Skills />
        <Portfolis />
        <Contact />
      </div>
    );
  }
}

export default Portfolio;
