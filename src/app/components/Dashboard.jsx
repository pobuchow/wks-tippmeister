import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextMatch } from "./NextMatch";
import { ConnectedLastMatch } from "./LastMatch";
import { ConnectedScoreboard } from "./Scoreboard";
import { ConnectedAddGameUserForm } from "./AddGameUserForm";
import { ConnectedAddNextMatchForm } from "./AddNextMatchForm";

export const Dashboard = ({ userId, game }) => (
  <div>
    <h2>dashboard</h2>
    {_.includes(game.hosts, userId) && <ConnectedAddGameUserForm game={game} />}
    {_.includes(game.hosts, userId) && <ConnectedAddNextMatchForm game={game} />}
    <ConnectedLastMatch game={game.id} />
    <ConnectedNextMatch game={game.id} />
    <ConnectedScoreboard
      users={game.users}
      scores={game.scores}
      game={game.id}
    />
  </div>
);

function mapStateToProps(state, ownProps) {
  const gameId = ownProps.match.params.id;
  const game = _.find(state.games, ["id", gameId]);
  return {
    userId: state.session.id,
    game: game,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
