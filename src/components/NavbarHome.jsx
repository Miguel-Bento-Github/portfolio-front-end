import React, { Component } from "react";
import Popup from "reactjs-popup";
import List from "./listURL/ListURL";
import "./navbarHome.css";
import BurgerIcon from "./burger/BurgerIcon";

const background = `
linear-gradient(
  #C1B2A0,
  #C1B2A0
)`;
const contentStyle = {
  display: "flex",
  background: background,
  backgroundSize: "cover",
  color: "#222",
  border: "none",
  padding: "1rem",
  borderRadius: "0.5rem",
  opacity: "0.9",
  width: "50%"
};
export default class NavbarHome extends Component {
  blur = () => {
    const bg = document.querySelector(".blur");
    bg.style.filter = "blur(2px)";
  };

  unBlur = () => {
    const bg = document.querySelector(".blur");
    bg.style.filter = "blur(0)";
  };

  render() {
    return (
      <nav className="main-nav">
        <Popup
          modal
          contentStyle={contentStyle}
          closeOnDocumentClick={true}
          trigger={open => <BurgerIcon open={open} />}
          arrow={false}
          onOpen={this.blur}
          onClose={this.unBlur}
        >
          {close => (
            <>
              <ul>
                <li>
                  <h2>Where to?</h2>
                </li>
                <List close={close} to="/" name="home" />
                <List close={close} to="skills" name="skills" />
                <List close={close} to="portfolio" name="projects" />
                <List close={close} to="contact" name="contact" />
              </ul>
              <span className="nav-close-btn btn pulse" onClick={close}>
                close
              </span>
            </>
          )}
        </Popup>
      </nav>
    );
  }
}
