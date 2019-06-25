import React, { Component } from "react";
import "./Skills.css";
import Card from "./skillscard/Card";
import reactlogo from "./images/React-logo.png";
import jquerylogo from "./images/jquery-logo.jfif";
import jslogo from "./images/js-logo.png";
import html5 from "./images/html-logo.png";
import css from "./images/css-logo.png";
import bootstrap from "./images/bootstrap-logo.jfif";
import node from "./images/node.png";
import express from "./images/express.png";
import mongodb from "./images/mongodb.jfif";
import sequelize from "./images/sequelize.png";
import mysql from "./images/mysql.png";
import firebase from "./images/firebase.png";
import mern from "./images/Mern.jpg";
import git from "./images/git.jfif";
import heroku from "./images/heroku.jfif";
import github from "./images/github.png";
import sdlc from "./images/sdlc.png";
import trello from "./images/trello.png";

class Skills extends Component {
  images = {
    FrontEnd: [
      {
        url: reactlogo,
        alt: "React JS",
        height: "6rem",
        width: "6rem"
      },
      {
        url: jslogo,
        alt: "Java Script",
        height: "6rem",
        width: "6rem"
      },
      {
        url: jquerylogo,
        alt: "jQuery",
        height: "5rem",
        width: "12rem"
      },
      {
        url: html5,
        alt: "HTML 5",
        height: "6rem",
        width: "6rem"
      },
      {
        url: css,
        alt: "CSS 3",
        height: "7rem",
        width: "6rem"
      },
      {
        url: bootstrap,
        alt: "Bootstrap",
        height: "7rem",
        width: "6rem"
      }
    ],
    Development: [
      {
        url: mern,
        alt: "MERN Stack Pradigm",
        height: "6rem",
        width: "12rem"
      },
      {
        url: sdlc,
        alt: "SDLC paradigm",
        height: "7rem",
        width: "6rem"
      },
      {
        url: git,
        alt: "Git",
        height: "5rem",
        width: "12rem"
      },
      {
        url: heroku,
        alt: "Heroku",
        height: "7rem",
        width: "8rem"
      },
      {
        url: github,
        alt: "Github",
        height: "7rem",
        width: "6rem"
      },
      {
        url: trello,
        alt: "Trello",
        height: "5rem",
        width: "12rem"
      }
    ],
    BackEnd: [
      {
        url: node,
        alt: "Node JS",
        height: "6rem",
        width: "8rem"
      },
      {
        url: express,
        alt: "Express JS",
        height: "6rem",
        width: "12rem"
      },
      {
        url: mysql,
        alt: "MySQL",
        height: "6rem",
        width: "10rem"
      },
      {
        url: mongodb,
        alt: "mongo DB",
        height: "7rem",
        width: "12rem"
      },
      {
        url: sequelize,
        alt: "sequelize",
        height: "7rem",
        width: "6rem"
      },
      {
        url: firebase,
        alt: "Firebase",
        height: "7rem",
        width: "6rem"
      }
    ]
  };
  render() {
    return (
      <div
        id="skills"
        className="container skills mb-5 d-flex justify-content-center"
      >
        <Card title={"Front-End"} images={this.images.FrontEnd} />
        <Card title={"Development"} images={this.images.Development} />
        <Card title={"Back-End"} images={this.images.BackEnd} />
      </div>
    );
  }
}

export default Skills;
