import React, { useEffect, memo } from "react";
import "./fourOhFour.scss";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  useEffect(() => {
    document.querySelector(".hamburger-inner").className +=
      " hamburger-inner--loading";
    return () => {
      document
        .querySelector(".hamburger-inner")
        .classList.remove("hamburger-inner--loading");
    };
  }, []);

  return (
    <section className="four-oh-four">
      <h1 className="four-oh-four__title">404 This page doesn't exist</h1>

      <Link className="four-oh-four__link" to="/">
        <i className="four-oh-four__icon fas fa-igloo"></i>
        Back to Home Page
      </Link>
    </section>
  );
};

export default memo(FourOhFour);
