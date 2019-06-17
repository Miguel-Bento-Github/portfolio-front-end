import React from "react";
import "./burger.css";

const BurgerIcon = ({ burgerTransition, open, ...props }) => {
  return (
    <div className={open ? "hamburger open is-active" : "hamburger"} {...props}>
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
  );
};

export default BurgerIcon;
