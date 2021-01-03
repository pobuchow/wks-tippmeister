import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

export const Gameboard = ({ games }) => (
  <div>
    <h1>Wks-Tippmeister</h1>
    { games.map((game) => (
      <div key={game.id}>{game.name}</div>
    ))}
  </div>
);

export const ConnectedGameboard = connect((state) => ({games: state.games}))(Gameboard);
