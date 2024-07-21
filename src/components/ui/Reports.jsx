import React, { useState } from 'react'
import Charts from './Charts';
import CardFilter from './CardFilter'

function Reports() {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">Letters Received
           <span>/{filter}</span>
        </h5>
    <Charts />
    </div>
    </div>
  )
}

export default Reports