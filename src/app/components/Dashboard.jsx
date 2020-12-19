import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextMatch } from './NextMatch'

export const Dashboard = ({ matches }) => (
  <div>
    <h2>dashboard</h2>
    <ConnectedNextMatch matches={matches} />
    {/* <Scoreboard users={game.users} scores={game.scores} /> */}
    {/* {_.orderBy(users, ['points'], ['desc'])
        .map(user =>(
            <div>
                {user.name} {user.points}
            </div>
        ))} */}
  </div>
);

function mapState2Props(state, ownProps) {
  const gameId = ownProps.gameId;
  const game = _.find(state.games, ["id", gameId]);
  return {
    id: gameId,
    users: _.filter(state.users, function (user) {
      return _.includes(game.users, user.id);
    }),
    scores: _.filter(state.scores, function (score) {
      return _.includes(game.scores, score.id);
    }),
    bets: _.filter(state.bets, function (bet) {
      return _.includes(game.bets, bet.id);
    }),
    matches: _.filter(state.matches, function (match) {
        return _.includes(game.matches, match.id);
      }),
  };
}

export const ConnectedDashboard = connect(mapState2Props)(Dashboard);
