import React from "react";
import "./card-list.css";
import Card from "../card/card-component";

const CardList = ({ monsters }) => {
  return (
    <div className="monsters-box">
      {monsters.map((monster) => (
        <Card key={monster.name} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
