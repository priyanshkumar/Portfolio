import React from "react";
import "./About.css";
import priyansh from "./images/priyansh.jpg";

function About() {
  return (
    <section id="about" className="about py-4 d-flex justify-content-center">
      <div className="row w-100 bio-content py-5">
        <div className="col-12 p-0 d-flex flex-column align-items-center">
          <img src={priyansh} alt="Priyansh" />
          <p className="mt-5 mb-4 px-5">
            Hi, I'm Priyansh. I am a self motivated person and{" "}
            <span>a good friend</span>
          </p>
          <p className="px-5">
            I’m more about exploring what I can give to the world. Pushing
            myself to the edge is my strength. Learning different things is my
            hobby. I’m naturally curious about learning and improving my skills
            in different technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
