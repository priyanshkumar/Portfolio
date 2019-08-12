import React from "react";
import "./About.css";
import priyansh from "./images/priyansh.jpg";

function About() {
  return (
    <section className="about py-4 d-flex justify-content-center">
      <div className="row w-100 bio-content py-5">
        <div className="col-12 p-0 d-flex flex-column align-items-center">
          <img src={priyansh} alt="Priyansh" />
          <p className="mt-5 mb-4 px-5">
            Who am I?
            <span> A Good Friend.</span>
          </p>
          <p className="px-5">
            I'm a Web Developer. Educated from University of Toronto.
          </p>
          <p className="px-5">
            I’m naturally curious about learning how to make the human life
            easier with differnt technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
