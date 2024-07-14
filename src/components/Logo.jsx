import React from 'react';
import './logo.css';

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <i
        className="bi bi-menu-button-wide toggle-sidebar-btn"
        onClick={handleToggleSidebar}
      ></i>
      
      <div className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">KNUST PRACTICUM</span>
      </div>

      
    </div>
  );
}

export default Logo;