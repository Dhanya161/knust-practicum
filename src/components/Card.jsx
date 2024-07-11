import React from 'react';
import './card.css';

function Card({ card }) {
  return (
    <div className="col-sm-6">
      <div className="card info-card">
        <div className="card-body ">
          <h5>{card.name}</h5>
          <div className="d-flex align-items-center ">
            <div className="card-icon d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </div>
            <div className="ps-3">
              <h6>{card.value}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
