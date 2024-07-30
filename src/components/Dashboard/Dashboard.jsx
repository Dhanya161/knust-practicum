import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "../Cards/Card";
import Charts from "../ui/Charts";

function Dashboard() {
  const [cards, setCards] = useState();

  const fetchData = () => {
    fetch("http://localhost:5000/cards")
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
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "",
        padding: "10px",
        overflowX: "hidden",
        flexWrap: "wrap",
        marginTop: "3rem",  
      }}
    >
      {[cardsList]}

      <div className="w-full">
        <Charts />
      </div>
    </div>
  );
}

export default Dashboard;
