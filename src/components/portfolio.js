import React, { Component } from "react";
import Nav from "./navigation/Nav";
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Skills />
      </div>
    );
  }
}

export default Portfolio;
