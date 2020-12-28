import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { matchService } from "../services/MatchService";

export const NextMatch = ({ event_datetime, homeTeam, awayTeam }) => (
    <div>
      <h3>next match</h3>
      {event_datetime.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })} {homeTeam} - {awayTeam}
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    const matches = _.filter(state.matches, function (match) {
      return _.includes(ownProps.matches, match.id);
    });
    return matchService.getNextMatch(matches);
  }
  
  export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);