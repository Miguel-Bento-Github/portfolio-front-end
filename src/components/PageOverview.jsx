import React, { useRef } from "react";
import "./pageOverview.scss";
import List from "./listURL/ListURL";

import { pages } from "../router/routes";

const PageOverview = ({ isOpen, close }) => {
  const ref = useRef();
  const DisplayPages = pages.map(page => <List key={page} close={close} to={page} name={page} />);

  if (isOpen) {
    if (ref.current) {
      ref.current.classList.remove("page-overview--close");
      ref.current.classList.add("page-overview--open");
    }
  } else {
    if (ref.current) {
      ref.current.classList.remove("page-overview--open");
      ref.current.classList.add("page-overview--close");
    }
  }

  return (
    <div ref={ref} className="page-overview">
      <ul className="nav-list">
        <List close={close} exact={true} to="/" name="home" />
        {DisplayPages}
      </ul>
    </div>
  );
};
export default PageOverview;
