import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../../../../services/MatchService";
import { ConnectedBetNextMatchForm } from "./BetNextMatchForm";
import { ConnectedSetMatchResultForm } from "./SetMatchResultForm";

export const NextMatch = ({ userId, game, match }) =>
  match ? (
    <div>
      <h3>next match</h3>
      {match.event_datetime.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: '2-digit', 
        minute: '2-digit'
      })}{" "}
      {match.homeTeam} - {match.awayTeam}
      { _.includes(game.hosts, userId) && <ConnectedSetMatchResultForm match={match} /> }
      <ConnectedBetNextMatchForm match={match} gameId={game.id}/>
    </div>
  ) : null;

function mapState2Props(state, ownProps) {
  const game = _.find(state.games, { id: ownProps.game });
  const matches = _.filter(state.matches, function (match) {
    return _.includes(game.matches, match.id);
  });
  let match = game.isFinished ? null : matchService.getNextMatch(matches)
  return {
    userId: state.session.id,
    game: game,
    match: match
  };
}

export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);
