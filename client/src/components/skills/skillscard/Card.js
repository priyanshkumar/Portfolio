import React from "react";
import "./Card.css";

function Card({ title, images }) {
  return (
    <div className="col-lg-3 my-4 col-md-4 col-sm-5 col-8 skills-card mx-2 p-3 d-flex flex-column align-items-center">
      <h2 className="my-3 d-flex justify-content-center text-center">
        {title}
      </h2>
      {images.map(image => {
        return (
          <div
            key={image.id}
            className="img-logo mb-2 d-flex justify-content-center align-items-center"
          >
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
