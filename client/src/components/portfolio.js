import React, { Component } from "react";
import Nav from "./navigation/Nav";
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolis from "./portfolio/Portfolis";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div id="home" />
        <Header />
        <Nav />
        <div id="about" />
        <About />
        <div id="skills" />
        <Skills />
        <div id="portfolio" />
        <Portfolis />
        <div id="contact" />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
