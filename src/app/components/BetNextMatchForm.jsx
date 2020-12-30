import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { requestBetMatch } from '../store/mutations';

export const BetNextMatchForm = ({ matchId, betMatch }) => (
  <div>
    <button onClick={() => betMatch(matchId)}>bet this match!</button>
  </div>
);
  
  function mapState2Props(state, ownProps) {
    return {
      matchId: ownProps.matchId,
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    const gameId = ownProps.gameId;
    return {
      betMatch(matchId){
        dispatch(requestBetMatch(gameId, matchId));
      }
    }
  }
  
  export const ConnectedBetNextMatchForm = connect(mapState2Props, mapDispatchToProps)(BetNextMatchForm);