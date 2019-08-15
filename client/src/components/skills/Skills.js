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
        id: "fe1",
        url: reactlogo,
        alt: "React JS",
        height: "4rem",
        width: "4rem"
      },
      {
        id: "fe2",
        url: jslogo,
        alt: "Java Script",
        height: "4rem",
        width: "4rem"
      },
      {
        id: "fe3",
        url: jquerylogo,
        alt: "jQuery",
        height: "4rem",
        width: "12rem"
      },
      { id: "fe4", url: html5, alt: "HTML 5", height: "4rem", width: "4rem" },
      { id: "fe5", url: css, alt: "CSS 3", height: "5rem", width: "4rem" },
      {
        id: "fe6",
        url: bootstrap,
        alt: "Bootstrap",
        height: "5rem",
        width: "4rem"
      }
    ],
    Development: [
      {
        id: "de1",
        url: mern,
        alt: "MERN Stack Pradigm",
        height: "4rem",
        width: "10rem"
      },
      {
        id: "de2",
        url: sdlc,
        alt: "SDLC paradigm",
        height: "4rem",
        width: "4rem"
      },
      { id: "de3", url: git, alt: "Git", height: "4rem", width: "10rem" },
      { id: "de4", url: heroku, alt: "Heroku", height: "4rem", width: "4rem" },
      { id: "de5", url: github, alt: "Github", height: "4rem", width: "4rem" },
      { id: "de6", url: trello, alt: "Trello", height: "4rem", width: "10rem" }
    ],
    BackEnd: [
      { id: "be1", url: node, alt: "Node JS", height: "4rem", width: "6rem" },
      {
        id: "be2",
        url: express,
        alt: "Express JS",
        height: "4rem",
        width: "10rem"
      },
      { id: "be3", url: mysql, alt: "MySQL", height: "4rem", width: "8rem" },
      {
        id: "be4",
        url: mongodb,
        alt: "mongo DB",
        height: "4rem",
        width: "10rem"
      },
      {
        id: "be5",
        url: sequelize,
        alt: "sequelize",
        height: "5rem",
        width: "4rem"
      },
      {
        id: "be6",
        url: firebase,
        alt: "Firebase",
        height: "5rem",
        width: "4rem"
      }
    ]
  };
  render() {
    return (
      <div className="row hero mb-5 mx-0 d-flex justify-content-center">
        <Card title={"Front-End"} images={this.images.FrontEnd} />
        <Card title={"Development"} images={this.images.Development} />
        <Card title={"Back-End"} images={this.images.BackEnd} />
      </div>
    );
  }
}

export default Skills;
