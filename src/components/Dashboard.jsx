import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "./Card";
import Charts from "./ui/Charts";

function Dashboard() {
  const [cards, setCards] = useState();

  const fetchData = () => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cardsList =
    cards && cards.map((card) => <Card key={card._id} card={card} />);

  return (
    <div
      className=""
      style={{
        width: "100wv",
        minHeight: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "",
        padding: "10px",
        overflowX: "hidden",
        flexWrap: "wrap",
      }}
    >
      {[cardsList]}

      <div className="w-[40rem]">
        <Charts />
      </div>
    </div>
  );
}

export default Dashboard;
