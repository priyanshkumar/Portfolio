import React from "react";
import "./About.css";
import priyansh from "./images/priyansh.jpg";

function About() {
  return (
    <section id="about" className="about px-lg-5 d-flex justify-content-center">
      <div className="row bio-content py-5">
        <div className="col-12 d-flex flex-column align-items-center">
          <img src={priyansh} alt="Priyansh" />
          <p className="text-center mb-2 px-5">
            I'm Priyansh. I am a web developer having experience as junior web
            developer. Educated at University of Toronto Coding Bootcamp &
            Georgian College as a Computer Programmer. I have skills in
            front-end as well as back-end development.
          </p>
          <p className="text-center px-5">
            I’m more about exploring what I can give to the world. Pushing
            myself to the edge is my strength. Learning different things is my
            hobby. I’m naturally curious for learning and improving my skills in
            different technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
