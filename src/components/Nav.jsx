import React from "react";
import "./nav.css";
import NavNotice from "./NavNotice";
import NavAvatar from "./NavAvatar";
import NavSettings from "./NavSettings";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavAvatar />
        <NavSettings />
        <NavNotice />
      </ul>
    </nav>
  );
}

export default Nav;
