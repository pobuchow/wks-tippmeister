import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../services/MatchService";
import { ConnectedBetNextMatchForm } from "./BetNextMatchForm";

export const NextMatch = ({ match, gameId }) => (
  <div>
    <h3>next match</h3>
    {match.event_datetime.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}{" "}
    {match.homeTeam} - {match.awayTeam}
    <ConnectedBetNextMatchForm matchId={match.id} gameId={gameId} />
  </div>
);
  
  function mapState2Props(state, ownProps) {
    const game = _.find(state.games, { 'id': ownProps.game });
    const matches = _.filter(state.matches, function (match) {
      return _.includes(game.matches, match.id);
    });
    return {
      gameId: game.id,
      match: matchService.getNextMatch(matches)
    }
  }
  
  export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);