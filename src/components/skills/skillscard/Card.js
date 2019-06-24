import React from "react";
import "./Card.css";

function Card({ title, images }) {
  return (
    <div className="col-4 skills-card d-flex flex-column align-items-center">
      <h3 className="mt-3">{title}</h3>
      {images.map(image => {
        return (
          <img
            className="mb-2"
            src={image.url}
            alt={image.alt}
            style={{height: image.height}}
          />
        );
      })}
    </div>
  );
}

export default Card;
