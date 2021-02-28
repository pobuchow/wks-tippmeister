import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextMatch } from "./matches/next/NextMatch";
import { ConnectedLastMatch } from "./matches/last/LastMatch";
import { ConnectedScoreboard } from "./scoreboard/Scoreboard";
import { ConnectedAddGameUserForm } from "./AddGameUserForm";
import { ConnectedAddNextMatchForm } from "./AddNextMatchForm";

export const Dashboard = ({ userId, game }) => (
  <div className="page">
    <div className="page-body-full">
    <div className="page-body-label">dashboard</div>
    <ConnectedScoreboard
      users={game.users}
      matches={game.matches}
      game={game.id}
    />
    <div class="dashboard-host-panel">
      {_.includes(game.hosts, userId) && <ConnectedAddGameUserForm game={game} />}
      {_.includes(game.hosts, userId) && <ConnectedAddNextMatchForm game={game} />}
    </div>
    <ConnectedLastMatch game={game.id} />
    <ConnectedNextMatch game={game.id} />
    </div>
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
