import React, { useEffect } from "react";
import "./loadingScreen.scss";
import Spinner from "../../components/Spinner";

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
    <div className="loading-screen blur">
      <div className="loading-content">
        {<Spinner />}
        <div className="loading-text">
          Page under maintenance.
          <br />
          <a
            style={{ color: "#53a7ea" }}
            href="https://www.youtube.com/watch?v=gRo8FVytTtg"
          >{` When is it finished?`}</a>
        </div>
      </div>
    </div>
  );
}
