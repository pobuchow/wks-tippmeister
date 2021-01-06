import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectedCreateGameForm } from './CreateGameForm';

export const Gameboard = ({ games }) => (
  <div>
    <h1>Wks-Tippmeister</h1>
    {games.map((game) => (
      <div key={game.id}>
        <Link to={`games/${game.id}/dashboard`}>
          {game.name}
        </Link>
      </div>
    ))}
    <ConnectedCreateGameForm />
  </div>
);

export const ConnectedGameboard = connect((state) => ({games: state.games}))(Gameboard);
