import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextMatch } from './NextMatch';
import { ConnectedLastMatch } from './LastMatch';
import { ConnectedScoreboard } from './Scoreboard';
import { ConnectedAddGameUserForm } from './AddGameUserForm';

export const Dashboard = ({ game }) => (
  <div>
    <h2>dashboard</h2>
    <ConnectedAddGameUserForm game={game} />
    <ConnectedLastMatch game={game.id} />
    <ConnectedNextMatch game={game.id} />
    <ConnectedScoreboard 
      users={game.users} 
      scores={game.scores} 
      game={game.id} />
  </div>
);

function mapState2Props(state, ownProps) {
  const gameId = ownProps.match.params.id;
  const game = _.find(state.games, ["id", gameId]);
  return {
    game: game
  };
}

export const ConnectedDashboard = connect(mapState2Props)(Dashboard);
