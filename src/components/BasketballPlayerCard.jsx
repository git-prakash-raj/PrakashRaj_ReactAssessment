import React from "react";
import "./styles/BasketballPlayerCard.css";

function BasketballPlayerCard(props) {
  return (
    <div className="background">
      <div className="player-card">
        <img src={props.image} alt={`${props.name}`} className="player-image" />
        <h2 className="player-name">{props.name} </h2>
        <p className="player-position">({props.position})</p>
        <div className="player-stats">
          <p>Points per Game: {props.stats.pointsPerGame}</p>
          <p>Assists per Game: {props.stats.assistsPerGame}</p>
          <p>Rebounds per Game: {props.stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
}

export default BasketballPlayerCard;
