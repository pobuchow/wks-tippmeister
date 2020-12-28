import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ConnectedNextBet } from "./NextBet";

export const Scoreboard = ({ scores }) => (
  <div>
    <h3>scoreboard</h3>
    {_.orderBy(scores, ["points"], ["desc"]).map((score) => (
      <div key={score.id}>
        {score.user.name} {score.points}{" "}
        <ConnectedNextBet matches={score.matches} bets={score.bets} user={score.user.id} />
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

  let scoresResult = _.map(scores, function (score) {
    return {
      id: score.id,
      user: {
        id: score.user,
        name: _.find(users, ["id", score.user]).name,
      },
      points: score.points,
      matches: ownProps.matches,
      bets: ownProps.bets,
    };
  });
  return {
    scores: scoresResult,
  };
}

export const ConnectedScoreboard = connect(mapState2Props)(Scoreboard);
