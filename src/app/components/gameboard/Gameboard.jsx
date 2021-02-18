import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectedCreateGameForm } from "./CreateGameForm";

export const Gameboard = ({ games }) => (
  <div className="page">
    <div className="page-body-full">
      <div className="page-body-label">Wks-Tippmeister</div>
      <div className="gameboard">
        {games.map((game) => (
          <Link key={game.id} to={`games/${game.id}/dashboard`}>
            <div className="gameboard-card">
              <h2 class="gameboard-card-title">{game.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <ConnectedCreateGameForm />
    </div>
  </div>
);

export const ConnectedGameboard = connect((state) => ({ games: state.games }))(
  Gameboard
);
