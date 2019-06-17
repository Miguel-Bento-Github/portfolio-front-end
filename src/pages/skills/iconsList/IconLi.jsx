import React from "react";
import Icon from "./Icon";

const IconLi = ({ img, name, title }) => {
  return (
    <li className="skill-li">
      <h3 className="skill-title">{title}</h3>
      <div className="logos-container">
        <Icon img={img[0]} name={name[0]} />
        <Icon img={img[1]} name={name[1]} />
        <Icon img={img[2]} name={name[2]} />
        <Icon img={img[3]} name={name[3]} />
      </div>
    </li>
  );
};

export default IconLi;
