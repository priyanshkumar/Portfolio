import React from "react";
import "./Card.css";

function Card({ title, images }) {
  return (
    <div className="skills-card mx-2 p-3 d-flex flex-column align-items-center">
      <h2 className="d-flex justify-content-center text-center">{title}</h2>
      {images.map(image => {
        return (
          <div className="img-logo mb-2 d-flex justify-content-center align-items-center">
            <img
              src={image.url}
              alt={image.alt}
              style={{ height: image.height, width: image.width }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
