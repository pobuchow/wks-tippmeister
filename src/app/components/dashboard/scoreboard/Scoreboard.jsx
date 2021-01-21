import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextBet } from "./NextBet";

export const Scoreboard = ({ scores, gameId }) => (
  <div>
    <h3>scoreboard</h3>
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
  let scores = _.filter(state.scores, function (score) {
    return _.includes(ownProps.scores, score.id);
  });

  let scoresResult = _.map(users, function (user) {
    let score = _.find(scores, ["user", user.id]);
    return {
      userId: user.id,
      name: user.name,
      points: score ? score.points : 0
    };
  });
  return {
    gameId: ownProps.game,
    scores: scoresResult
  };
}

export const ConnectedScoreboard = connect(mapState2Props)(Scoreboard);
