import React from "react";
import { connect } from "react-redux";
import _, { last } from "lodash";

export const LastMatch = ({ event_datetime, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam }) => (
    <div>
        <h3>last match</h3>
        {event_datetime.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })} {homeTeam} - {awayTeam} {goalsHomeTeam} : {goalsAwayTeam}
    </div>
  );
  
  function mapState2Props(state, ownProps) {
    const matches = _.filter(state.matches, function (match) {
      return _.includes(ownProps.matches, match.id);
    });
    const matchesInPast = _.filter(matches, function(match){
        return match.event_datetime < new Date()
    });
    const matchesInPastSortedDesc = _.orderBy(matchesInPast, ['event_datetime'], ['desc']);
    return _.head(matchesInPastSortedDesc);
  }
  
  export const ConnectedLastMatch = connect(mapState2Props)(LastMatch);