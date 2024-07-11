import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Card from "./Card";

function Dashboard() {
  const [cards, setCards] = useState([]);

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

  return (
    <section className="">
          <div className="" style={{width:"100vw", minHeight:"100vh", display:"flex", alignItems:"center" , justifyContent:"center", flexDirection:"column", padding:"10px" ,overflowX: 'hidden'}}>
            {cards &&
              cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)}
          </div>
    </section>
  );
}

export default Dashboard;
