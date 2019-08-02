import React from "react";
import "./PortCard.css";

function PortCard({ card }) {
  return (
    <div className="portfolio my-5 d-flex justify-content-center col-lg-4 ">
      <div className="card-container">
        <div className="card card-front">
          <img
            className="card-img-top card-image"
            src={card.front.img}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title m-1">{card.front.title}</h4>
            <p className="card-text">{card.front.content}</p>
          </div>
        </div>
        <div className="card card-back">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <p className="mb-2">{card.back.content}</p>
            <p>{card.back.Built}</p>
            <div className="d-flex justify-content-center">
              <a href={card.back.heroku} className="btn btn-primary mr-2">
                Checkout
              </a>
              <a href={card.back.github} className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortCard;
