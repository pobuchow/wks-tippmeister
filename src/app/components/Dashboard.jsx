import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextMatch } from './NextMatch';
import { ConnectedLastMatch } from './LastMatch';
import { ConnectedScoreboard } from './Scoreboard';

export const Dashboard = ({ game }) => (
  <div>
    <h2>dashboard</h2>
    <ConnectedLastMatch matches={game.matches} />
    <ConnectedNextMatch matches={game.matches} />
    <ConnectedScoreboard users={game.users} scores={game.scores} />
  </div>
);

function mapState2Props(state, ownProps) {
  const gameId = ownProps.gameId;
  const game = _.find(state.games, ["id", gameId]);
  return {
    game: game
  };
}

export const ConnectedDashboard = connect(mapState2Props)(Dashboard);
