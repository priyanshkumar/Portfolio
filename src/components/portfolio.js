import React, { Component } from "react";
import Nav from "./navigation/Nav";
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolis from "./portfolio/Portfolis";
import Contact from "./contact/Contact";
import Footer from './footer/Footer'

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
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
