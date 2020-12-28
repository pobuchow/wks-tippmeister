import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../services/MatchService";
import { requestBetMatch } from '../store/mutations';

export const NextMatch = ({ id, event_datetime, homeTeam, awayTeam, betMatch }) => (
    <div>
      <h3>next match</h3>
      {event_datetime.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })} {homeTeam} - {awayTeam}
      <button onClick={() => betMatch(id)}>bet this match!</button>
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    const matches = _.filter(state.matches, function (match) {
      return _.includes(ownProps.matches, match.id);
    });
    return matchService.getNextMatch(matches);
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      betMatch(id){
        dispatch(requestBetMatch(id));
      }
    }
  }
  
  export const ConnectedNextMatch = connect(mapState2Props, mapDispatchToProps)(NextMatch);