import React from "react";

const Img = ({ img, name }) => {
  return (
    <div className="img-container">
      <img
        className={
          name === "Handlebars" ? "skill-img shake hb" : "skill-img shake"
        }
        src={img}
        alt={img.toString()}
      />
      <figcaption className="img-caption">{name}</figcaption>
    </div>
  );
};

export default Img;
