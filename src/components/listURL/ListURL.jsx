import React from "react";
import { NavLink } from "react-router-dom";

const ListURL = ({ close, to, name }) => {
  return (
    <li>
      <NavLink to={to}>
        <ul>
          <li className="slide-in nav-link" onClick={close}>
            {name}
          </li>
        </ul>
      </NavLink>
    </li>
  );
};
export default ListURL;
