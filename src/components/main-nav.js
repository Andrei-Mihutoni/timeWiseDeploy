import { NavLink } from "react-router-dom";

import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <div className="navItem">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
    </NavLink>
    </div>

    <div className="navItem">
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
    </NavLink>
    </div>

    <div className="navItem">
      <NavLink
        to="/external-api"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        External API
    </NavLink>
    </div>

    <div className="navItem">
      <NavLink
        to="./pages/calendar"
        exact
        className="calendar"
        activeClassName="router-link-exact-active"
      >
        Calendar
    </NavLink>
    </div>

  </div>
);

export default MainNav;
