import React from "react";
import { Link } from "../routes";

export default ({ game }) => (
  <div className="column is-narrow">
    <Link route="game" params={{ slug: game.id }}>
      <div className="card game-card">
        <div className="card-image">
          <figure className="game-image">
            <img src={game.logo} alt={game.name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">{game.name}</p>
        </div>
      </div>
    </Link>
  </div>
);
