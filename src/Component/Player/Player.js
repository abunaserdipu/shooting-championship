import { faDollarSign, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./player.css";

const Player = (props) => {
  // console.log(props.addedPlayer)
  const { img, name, country, age, salary } = props.player;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="player">
        <img src={img} alt="Player-img" />
        <h3>Name: {name}</h3>
        <p>Country: {country}</p>
        <p>Age: {age}</p>
        <p>
          Salary: <FontAwesomeIcon icon={faDollarSign} />
          {salary}
        </p>
        <button
          disabled={isClicked}
          onClick={() => {
            props.handleAddedPlayer(props.player);
            setIsClicked(true);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faUser} />
          {isClicked ? " Player Already added" : " Add Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
