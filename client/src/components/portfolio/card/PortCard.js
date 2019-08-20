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
            <h4 className="card-title my-1">
              <strong>{card.front.title}</strong>
            </h4>
            <p className="card-text">{card.front.content}</p>
          </div>
        </div>
        <div className={`card card-back image${card.id}`}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center">
              <p>Would you like to visit?</p>
              <div>
                <a
                  rel="noopener noreferrer"
                  href={card.back.heroku}
                  className="mr-2"
                  target="_blank"
                >
                  <ion-icon
                    name="globe"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Heroku Deployed"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  href={card.back.github}
                  className=""
                  target="_blank"
                >
                  <ion-icon
                    name="logo-github"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="GitHub"
                  >
                    Icon
                  </ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortCard;
