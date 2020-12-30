import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { requestBetMatch } from '../store/mutations';

export const BetNextMatchForm = ({ match, betMatch }) => {
  const [goalsHomeTeam, setGoalsHomeTeam] = useState(0);
  const [goalsAwayTeam, setGoalsAwayTeam] = useState(0);

  return (
    <div>
      <form onSubmit={() => betMatch(match.id, goalsHomeTeam, goalsAwayTeam)}>
        <label>
          {match.homeTeam}
          <input 
            type="number" 
            value={goalsHomeTeam} 
            onChange={e => setGoalsHomeTeam(e.target.value)}
          />
        </label>
        <label>
          {match.awayTeam}
          <input 
            type="number" 
            value={goalsAwayTeam} 
            onChange={e => setGoalsAwayTeam(e.target.value)}  
          />
        </label>
        <input type="submit" value="bet this match!" />
      </form>
    </div>
  );
};
  
  function mapState2Props(state, ownProps) {
    return {
      match: ownProps.match,
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    const gameId = ownProps.gameId;
    return {
      betMatch(matchId, goalsHomeTeam, goalsAwayTeam){
        dispatch(requestBetMatch(gameId, matchId, goalsHomeTeam, goalsAwayTeam));
      }
    }
  }
  
  export const ConnectedBetNextMatchForm = connect(mapState2Props, mapDispatchToProps)(BetNextMatchForm);