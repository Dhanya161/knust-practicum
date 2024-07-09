import React from 'react'

function NavNotice() {
  return (
   <li className="nav-item dropdown">
    <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
      <i className="bi bi-bell-fill"></i>
      <span className="badge bg-danger badge-number">4</span>
    </a>

    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
      <li className="dropdown-header">
        You have 4 new notifications
        <a href="#">
          <span className="badge rounded-pill bg-primary p-2 ms-2">
            View all
          </span>
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li className="notification-item">
        <i className="bi bi-exclamation-circle text-warning"></i>
        <div>
          <h4>Lorem Ipsum</h4>
          <p>ek9u93jkjsoo</p>
          <p>40 min. ago</p>
        </div>
      </li>

      <li>
        <hr className="dropdown-divider" />
      </li>

      <li className="notification-item">
        <i className="bi bi-info-circle text-primary"></i>
        <div>
          <h4>siu03l3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>4 hrs. ago</p>
        </div>
      </li>

      <li>
        <hr className="dropdown-divider" />
      </li>

      <li className="dropdown-footer">
        <a href="#">Show all notifications</a>
      </li>
    </ul>

   </li>
  );
}

export default NavNotice