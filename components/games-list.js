import React from "react";
import GameCard from "./game-card";

export default ({ games }) => (
  <div className="columns is-mobile is-multiline">
    {games.map(g => {
      return <GameCard key={g.id} game={g} />;
    })}
  </div>
);
