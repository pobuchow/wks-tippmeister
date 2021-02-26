import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextBet } from "./NextBet";
import { scoreService } from "../../../services/score/ScoreService";

export const Scoreboard = ({ scores, gameId }) => (
  <div className="page-body-full">
    {/* <div className="page-body-label">scoreboard</div> */}
    {_.orderBy(scores, ["points"], ["desc"]).map((score) => (
      <div key={score.userId}>
        {score.name} {score.points}{" "}
        <ConnectedNextBet gameId={gameId} userId={score.userId} />
      </div>
    ))}
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
