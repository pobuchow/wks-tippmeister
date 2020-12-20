import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

export const NextMatch = ({ event_datetime, homeTeam, awayTeam }) => (
    <div>
      <h3>next match</h3>
      {event_datetime.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })} {homeTeam} - {awayTeam}
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    const matches = ownProps.matches;
    let matchesInFuture = _.filter(matches, function(match){
        return match.event_datetime > new Date()
    });
    let matchesInFutureSortedAsc = _.orderBy(matchesInFuture, ['event_datetime'], ['asc']);
    const nextMatch = _.head(matchesInFutureSortedAsc);
    return nextMatch;
  }
  
  export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);