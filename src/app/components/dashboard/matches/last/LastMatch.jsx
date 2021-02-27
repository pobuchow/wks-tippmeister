import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { MatchTable } from "./../table/MatchTable";
import { matchService } from "../../../../services/match/MatchService";

const label = "last match";

export const LastMatch = ({ match }) =>
  match ? (
    <div className="page-body-full">
      <MatchTable label={label} match={match} />
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
