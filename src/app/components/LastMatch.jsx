import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

export const LastMatch = ({ event_datetime, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam }) => (
    <div>
        last match: {event_datetime.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })} {homeTeam} - {awayTeam} {goalsHomeTeam} : {goalsAwayTeam}
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    const matches = ownProps.matches;
    let matchesInPast = _.filter(matches, function(match){
        return match.event_datetime < new Date()
    });
    let matchesInPastSortedDesc = _.orderBy(matchesInPast, ['event_datetime'], ['desc']);
    const lastMatch = _.head(matchesInPastSortedDesc);
    return lastMatch;
  }
  
  export const ConnectedLastMatch = connect(mapState2Props)(LastMatch);