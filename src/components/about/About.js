import React from "react";
import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="about px-lg-5 my-5 d-flex justify-content-center"
    >
      <div className="row bio-content py-5">
        <div className="col-12 d-flex flex-column align-items-center">
          <h2 className="text-center mb-2">
            Hi, I’m Priyansh. Nice to meet you.
          </h2>
          <p className="text-center mb-2 px-5">
            I am web developer having experience as junior web developer.
            Educated at University of Toronto Coding Bootcamp & Georgian College
            as a Computer Programmer. I have skills in front-end as well as
            back-end devlopment.
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
