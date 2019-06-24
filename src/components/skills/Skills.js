import React, { Component } from "react";
import "./Skills.css";
import Card from "./skillscard/Card";
import reactlogo from "./images/React-logo.png";
import jquerylogo from "./images/jquery-logo.png";

class Skills extends Component {
  images = {
    FrontEnd: [
      {
        url: reactlogo,
        alt: "React",
        height: "2rem"
      },
      {
        url: jquerylogo,
        alt: "jQuery"
      }
    ]
  };
  render() {
    return (
      <div className="container d-flex">
        <Card title={"Front-End Skills"} images={this.images.FrontEnd} />
        <Card title={"Development Skills"} images={this.images.FrontEnd} />
        <Card title={"Back-End Skills"} images={this.images.FrontEnd} />
      </div>
    );
  }
}

export default Skills;
