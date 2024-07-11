import React from "react";
import "./card.css";

function Card({ card }) {
  return (
      <div
        className=""
        style={{
          margin: "20px",
          height: "70px",
          width: "300px",
          background: "",
          borderRadius: "1rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
      <div className="" style={{width:"100%", height:"20px", display: "flex", justifyContent:"center", alignItems :"center", font:"bold" }}>{card.name}</div>
    </div>
  );
}

export default Card;
