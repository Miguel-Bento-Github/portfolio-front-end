import React, { useEffect, memo } from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.querySelector(".hamburger-inner").className += " hamburger-inner--white";
    return () => {
      document.querySelector(".hamburger-inner").classList.remove("hamburger-inner--white");
    };
  }, []);

  return (
    <section id="section" className="page-not-found page">
      <h1 className="page-not-found__title">404 This page doesn't exist</h1>

      <Link className="page-not-found__link" to="/">
        <i className="page-not-found__icon fas fa-igloo"></i>
        Back to Home Page
      </Link>
    </section>
  );
};

export default memo(PageNotFound);
