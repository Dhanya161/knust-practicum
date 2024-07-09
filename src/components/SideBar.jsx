import React from 'react';
import './sideBar.css';
import navList from '../data/navItem';
import NavItem from './NavItem';

function SideBar() {
  return <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
      <a className="nav-link" href="/">
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </a>
      </li>

      <li className="nav-item">
      <a className="nav-link" href="/">
        <i className="bi bi-kanban"></i>
        <span>Manage</span>
      </a>
      </li>
     
      <li className="nav-item">
      <a className="nav-link" href="/">
        <i className="bi bi-activity"></i>
        <span>Activity</span>
      </a>
      </li>

      <li className="nav-heading">ACCOUNT PAGES</li>
      {navList.map(nav=>(
          <NavItem key={nav._id} nav={nav} />
      ))}

    </ul>
  </aside>
}

export default SideBar
