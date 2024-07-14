import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "./Card";

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


  const cardsList = cards && cards.map((card) => <Card key={card._id} card={card} />);

  return (
    <div className="" style={{
        width: "100wv",
        minHeight: "10rem",
        display: "flex",
        alignItems: "",
        justifyContent:"",
        flexDirection: "",
        padding: "10px",
        overflowX: "hidden",
        flexWrap: "wrap"
      }}>
        {[cardsList]}

    
    </div>
    
  );
}

export default Dashboard;
