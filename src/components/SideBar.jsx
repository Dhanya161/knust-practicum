import React from "react";
// import './sideBar.css';
import navList from "../data/navItem";
import NavItem from "./NavItem";
import { Link, useLocation } from "react-router-dom";

export const navItems = [
  {
    icon: "bi bi-speedometer",
    title: "Dashboard",
    destination: "/",
  },
  {
    icon: "bi bi-diagram-3",
    title: "Manage",
    destination: "manage",
  },
  {
    icon: "bi bi-activity",
    title: "Activity",
    destination: "activity",
  },
];


export function SideBarItem({ icon, title, destination }) {
  // const location = useLocation();
  return (
    <a
      className={`nav-link  nav-item h-[4rem] my-2  rounded-md shadow-sm flex items-center justify-start px-4  gap-2`}
       href= {`/${destination}`}
    >
      <i className={`bi  ${icon}`}></i>
      <span>{title}</span>
    </a>
  );
}

function SideBar() {
  const location = useLocation();

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            href="/"
          >
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/manage" ? "active" : ""
            }`}
            to="/manage"
          >
            <i className="bi bi-kanban"></i>
            <span>Manage</span>
          </Link>
        </li>

        <li className="nav-item">
          <a
            className={`nav-link ${
              location.pathname === "/activity" ? "active" : ""
            }`}
            href="/activity"
          >
            <i className="bi bi-activity"></i>
            <span>Activity</span>
          </a>
        </li>

        <li className="nav-heading">ACCOUNT PAGES</li>
        {navList.map((nav) => (
          <NavItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
