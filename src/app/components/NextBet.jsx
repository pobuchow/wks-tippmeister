import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../services/MatchService";

export const NextBet = ({ bet }) => (
  <div style={{display: 'inline-block'}}>
    {bet ? 
        <div key={bet.id}>
            {bet.goalsHomeTeam} : {bet.goalsAwayTeam}
        </div> 
    : ""}
  </div>
);

function mapState2Props(state, ownProps) {
  const game = _.find(state.games, { 'id': ownProps.gameId });
  let matches =_.filter(state.matches, function (match) {
    return _.includes(game.matches, match.id);
  });
  let nextMatch = matchService.getNextMatch(matches);
  let nextBets =_.filter(state.bets, function (bet) {
    return bet.game === game.id && bet.match === nextMatch.id;
  });
  let bet = _.find(nextBets, ["owner", ownProps.userId]);
  return {
    bet: bet
  };
}

export const ConnectedNextBet = connect(mapState2Props)(NextBet);
