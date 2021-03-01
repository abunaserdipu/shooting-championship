import React, { useEffect, useState } from "react";
import playersData from "../../data/playersData.json";
import Player from "../Player/Player";
import "./pageBody.css";
import AddedPlayer from "../AddedPlayer/AddedPlayer";

const PageBody = () => {
  const [players, setPlayers] = useState([]);
  const [addedPlayer, setAddedPlayer] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const handleAddedPlayer = (player) => {
    const newAddedPlayer = [...addedPlayer, player];
    setAddedPlayer(newAddedPlayer);
  };
  return (
    <div className="row">
      <div className="col-sm-9">
        <div className="card">
          <div className="card-body">
            {players.map((player) => (
              <Player
                key={player.id}
                handleAddedPlayer={handleAddedPlayer}
                player={player}
              ></Player>
            ))}
          </div>
        </div>
      </div>

      <div className=" col-sm-3">
        <AddedPlayer addedPlayer={addedPlayer}></AddedPlayer>
      </div>
    </div>
  );
};

export default PageBody;
