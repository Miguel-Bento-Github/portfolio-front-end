import React from "react";
import { NavLink } from "react-router-dom";

const ListURL = ({ exact, to, name, close }) => {
  return (
    <li>
      <NavLink
        onClick={close}
        activeClassName="nav-link--active"
        className="nav-link"
        exact={exact}
        to={to}
      >
        {name}
      </NavLink>
    </li>
  );
};
export default ListURL;
