import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../../../../services/MatchService";

export const LastMatch = ({ match }) =>
  match ? (
    <div>
      <h3>last match</h3>
      {match.event_datetime.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })}{" "}
      {match.homeTeam} - {match.awayTeam} {match.goalsHomeTeam} :{" "}
      {match.goalsAwayTeam}
    </div>
  ) : null;

function mapState2Props(state, ownProps) {
  const game = _.find(state.games, { id: ownProps.game });
  const matches = _.filter(state.matches, function (match) {
    return _.includes(game.matches, match.id);
  });
  return {
    match: matchService.getLastMatch(matches),
  };
}

export const ConnectedLastMatch = connect(mapState2Props)(LastMatch);
