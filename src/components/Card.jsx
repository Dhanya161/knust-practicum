import React from "react";
import "./card.css";

function Card({ card }) {
  return (
    <div
      className=""
      style={{
        margin: "10px",
        height: "50px",
        width: "250px",
        background: "",
        borderRadius: "0.5rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
      }}
    >
      <div
        className=""
        style={{
          width: "70%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          font: "bold",
          background: "",
        }}
      >
        {card.name}
      </div>
      <div
        style={{
          height: "2.5rem",
          borderRadius: "0.5rem",
          background: "blue",
          width: "2.5rem",
        }}
      ></div>
    </div>
  );
}

export default Card;
