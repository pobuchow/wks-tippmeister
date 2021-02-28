import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextBet } from "./NextBet";
import { scoreService } from "../../../services/score/ScoreService";

export const Scoreboard = ({ scores, gameId }) => (
  <div className="page-body-full">
    <div className="table-frame">
      <div className="table-div">
        <table className="table">
          <thead>
            <tr>
              <th className="scoreboard-header">player</th>
              <th className="header">points</th>
              <th className="header">next bet</th>
            </tr>
          </thead>
          <tbody>
            {_.orderBy(scores, ["points"], ["desc"]).map((score) => (
              <tr key={score.userId}>
                <td className="scoreboard-name-row">{score.name}</td>
                <td className="scoreboard-points-row">{score.points}</td>
                <td className="scoreboard-score-row"><ConnectedNextBet gameId={gameId} userId={score.userId} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

function mapState2Props(state, ownProps) {
  let users = _.filter(state.users, function (user) {
    return _.includes(ownProps.users, user.id);
  });
  let matches = _.filter(state.matches, function (match) {
    return _.includes(ownProps.matches, match.id);
  });
  let scoresResult = _.map(users, function (user) {
    return {
      userId: user.id,
      name: user.name,
      points: scoreService.calcPoints(
        matches, 
        _.filter(state.bets, { 'game': ownProps.game, 'owner': user.id }))
    };
  });
  return {
    gameId: ownProps.game,
    scores: scoresResult
  };
}

export const ConnectedScoreboard = connect(mapState2Props)(Scoreboard);
