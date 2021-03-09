import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  getNextMatch,
} from "../../../../services/match/MatchService";
import MatchTable from "./../table/MatchTable";
import { ConnectedBetNextMatchForm } from "./BetNextMatchForm";
import { ConnectedSetMatchResultForm } from "./SetMatchResultForm";

const label = "next match";

export const NextMatch = ({ userId, game, match }) =>
  match ? (
    <div className="page-body-full">
      <MatchTable label={label} match={match} />
      {_.includes(game.hosts, userId) && (
        <ConnectedSetMatchResultForm match={match} />
      )}
      <ConnectedBetNextMatchForm match={match} gameId={game.id} />
    </div>
  ) : null;

function mapState2Props(state, ownProps) {
  const game = _.find(state.games, { id: ownProps.game });
  const matches = _.filter(state.matches, function (match) {
    return _.includes(game.matches, match.id);
  });
  let match = game.isFinished ? null : getNextMatch(matches);
  return {
    userId: state.session.id,
    game: game,
    match: match,
  };
}

export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);
