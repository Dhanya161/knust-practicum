import React from "react";
import "./card.css";

function Card({ card }) {
  return (
    <a
      className=""
      // onClick={()=> window.location(`/manage/:${card.name}`)}
      href={`/manage/${card.name}`}
      style={{
        margin: "10px",
        height: "50px",
        width: "200px",
        background: "",
        borderRadius: "0.5rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className=""
        style={{
          width: "70%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          font: "bold",
          padding: "0.1rem 0",
        }}
      >
        <div className="w-full text-[0.8rem] text-gray-500" style={{fontStyle:"bold"}}>{card.name}</div>
        <div className="w-full font-bold">{card.value}</div>
      </div>
      <div
        style={{
          height: "2.5rem",
          borderRadius: "0.5rem",
          background: "",
          width: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage:"linear-gradient(to right, #56CCF2, #2F80ED)"

        }}
        className={`${card.icon}`}
      ></div>
    </a>
  );
}

export default Card;
