import React, { useEffect } from "react";
import "./loadingScreen.scss";
import Spinner from "../../components/Spinner";
import Link from "../../components/iconLink/IconLink";

export default function LoadingScreen() {
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
    <div className="loading-screen blur page">
      <div className="loading-content">
        {<Spinner />}
        <div className="loading-text">
          Page under maintenance.
          <br />
          <br />
          <Link
            className="loading-contact-icon"
            href="https://github.com/Miguel-Bento-Github"
            icon="github"
          >
            Please check my Github.
            <br />
            <br />
          </Link>
        </div>
      </div>
    </div>
  );
}
