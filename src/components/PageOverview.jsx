import React, { useEffect, useRef } from "react";
import "./pageOverview.scss";
import List from "./listURL/ListURL";
import { isDesktopWidth } from "../helpers/isMobile";

const PageOverview = ({ isOpen, onOpen, onClose, close }) => {
  const pages = ["skills", "projects", "contact"];

  const displayPages = pages.map(page => (
    <List key={page} close={close} to={page} name={page} />
  ));

  const ref = useRef(null);

  /**
   * Closes popup if a click is outside of the component.
   * Timeout was set so that this function doesn't fire before
   * the click on the close hamburger button
   *
   * @param {object} event
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setTimeout(() => {
        close();
      }, 100);
    }
  }

  handleClickOutside(ref);

  function disableAnchorClicks(disable) {
    let links;
    links = document.querySelectorAll(".page");

    if (disable) {
      links.forEach(link => {
        link.style.pointerEvents = "none";
      });
    } else {
      links.forEach(link => {
        link.style.pointerEvents = "";
      });
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    disableAnchorClicks(true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      disableAnchorClicks();
    };
  });

  useEffect(() => {
    onOpen();
    return () => {
      onClose();
    };
  }, [isOpen, onOpen, onClose]);

  return (
    <div ref={ref} className="page-overview">
      <h2 className="nav-title">Where to?</h2>
      <ul className="nav-list">
        <List close={close} exact={true} to="/" name="home" />
        {displayPages}
      </ul>
      {isDesktopWidth() && (
        <button type="button" className="btn btn-nav-close" onClick={close}>
          close
        </button>
      )}
    </div>
  );
};
export default PageOverview;
