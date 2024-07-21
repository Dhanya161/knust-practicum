import React, { useState } from 'react';

function CardFilter({ filterChange }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="filter">
      <button className="icon" type="button" onClick={handleDropdownToggle}>
        <i className="bi bi-three-dots"></i>
      </button>
      {showDropdown && (
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow show">
        
          <li>
            <button className="dropdown-item" type="button" onClick={() => filterChange('Today')}>
              Today
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button" onClick={() => filterChange('This Month')}>
              This Month
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button" onClick={() => filterChange('This Year')}>
              This Year
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default CardFilter;