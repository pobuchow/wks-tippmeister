import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

export const NextMatch = ({ event_datetime, homeTeam, awayTeam }) => (
    <div>
        next match: {event_datetime.toLocaleString()} {homeTeam} - {awayTeam}
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    const matches = ownProps.matches;
    let matchesInFuture = _.filter(matches, function(match){
        return match.event_datetime> new Date()
    });
    let matchesInFutureSortedAsc = _.orderBy(matchesInFuture, ['event_datetime'], ['asc']);
    const nextMatch = _.head(matchesInFutureSortedAsc);
    return nextMatch;
  }
  
  export const ConnectedNextMatch = connect(mapState2Props)(NextMatch);