import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../services/MatchService";
import { requestBetMatch } from '../store/mutations';

export const NextMatch = ({ match, betMatch }) => (
  <div>
    <h3>next match</h3>
    {match.event_datetime.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}{" "}
    {match.homeTeam} - {match.awayTeam}
    <button onClick={() => betMatch(match.id)}>bet this match!</button>
  </div>
);
  
  function mapState2Props(state, ownProps) {
    const game = _.find(state.games, { 'id': ownProps.game });
    const matches = _.filter(state.matches, function (match) {
      return _.includes(game.matches, match.id);
    });
    return {
      match: matchService.getNextMatch(matches)
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    const gameId = ownProps.game;
    return {
      betMatch(matchId){
        dispatch(requestBetMatch(gameId, matchId));
      }
    }
  }
  
  export const ConnectedNextMatch = connect(mapState2Props, mapDispatchToProps)(NextMatch);