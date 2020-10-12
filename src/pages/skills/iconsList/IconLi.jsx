import React from "react";
import Icon from "./Icon";

const IconLi = ({ images, name, title, links }) => {
  return (
    <li className="skill-li">
      <h3 className="skill-title">{title}</h3>
      <div className="logos-container">
        {images.map((img, i) => (
          <Icon key={name[i]} img={img} name={name[i]} link={links[name[i].toLowerCase()]} />
        ))}
      </div>
    </li>
  );
};

export default IconLi;
