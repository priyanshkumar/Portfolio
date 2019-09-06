import React from 'react';
import './About.css';
import priyansh from './images/priyansh1.jpg';

function About() {
  return (
    <section className="about pt-4 pb-4 d-flex justify-content-center">
      <div className="row w-100 bio-content py-5 d-flex justify-content-center">
        <div className="col-lg-10 col-12 p-0 px-lg-5 d-flex flex-column align-items-center">
          <img src={priyansh} alt="Priyansh" />
          <p className="mt-5 mb-4 px-5 px-sm-0 text-center">
            Who am I?
            <span> A Good Friend.</span>
          </p>
          <p className="px-5 px-sm-0 text-center">
            Web developer offering skills in front-end and back-end development.
            Certification in Full Stack Web Development from the University of
            Toronto, and a Graduation in Computer Programmer from Georgian
            College. Proficient in MERN stack development and have a working
            knowledge of MVC, SDLC, and Agile methodology. Quick learner and
            comfortable working within a team with set deadlines. Passionate
            about approaching programming challenges from different angles, and
            collaborating with others to create meaningful web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
