import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./addedPlayer.css";

const AddedPlayer = (props) => {
  const addedPlayer = props.addedPlayer;
  let total = 0;
  for (let i = 0; i < addedPlayer.length; i++) {
    const player = addedPlayer[i];
    total = total + player.salary;
  }

  return (
    <div className="card" style={{ boxShadow: "5px 5px 10px gray" }}>
      <h2>Added Players: {addedPlayer.length}</h2>
      {addedPlayer.map((playerName) => (
        <Sidebar key={playerName.id} sidebar={playerName}></Sidebar>
      ))}

      <h3>
        Total Amount: <FontAwesomeIcon icon={faDollarSign} />
        {total}
      </h3>
    </div>
  );
};

export default AddedPlayer;
